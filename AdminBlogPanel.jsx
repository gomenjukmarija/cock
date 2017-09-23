var React = require('react');
var SpeedyPaperActions = require('../../actions/SpeedyPaperActions.js');
var Router = require('react-router');
var Link = require('react-router').Link;
var Select = require('react-select');
var Bootstrap = require('react-bootstrap');
var Panel = require('react-bootstrap/lib/Panel');
var Helmet = require('react-helmet');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var Table = require('reactable/lib/reactable').Table;
var Tr = Reactable.Tr;
var Td = Reactable.Td;
var BlogListStore = require('../../stores/BlogListStore');
var BlogStore = require('../../stores/BlogStore');
var PaginationForLandings = require('../PaginationForLandings.jsx');

function getState() {
	return {
		posts: BlogStore.getMyLoadedPosts(),
		total: BlogListStore.get('back').total,
		page: BlogListStore.get('back').page,
		perPage: BlogListStore.get('back').perPage,
	};
}

var AdminBlogPanel = React.createClass({

	getInitialState: function() {
		return getState();
	},
	_onChange: function() {
		if(this.isMounted()) this.setState(getState());
	},

	componentDidMount: function() {
		BlogStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		BlogStore.removeChangeListener(this._onChange);
	},

	componentWillMount: function() {
		setTimeout(SpeedyPaperActions.a.bind('', 'POSTS_LOAD_ATTEMPT'), 0);
	},

	_navigateToPage: function(page, e) {
		e.preventDefault();
		SpeedyPaperActions.a('POSTS_LOAD_ATTEMPT',{page:page});
	},

	_changePerPage: function(perPage, e) {
		e.preventDefault();
		SpeedyPaperActions.a('POSTS_LOAD_ATTEMPT',{perPage:perPage});
	},
	_navigateToPage: function(page, e) {
		e.preventDefault();
		SpeedyPaperActions.a('POSTS_LOAD_ATTEMPT',{page:page});
	},
	_changePerPage: function(perPage, e) {
		e.preventDefault();
		SpeedyPaperActions.a('POSTS_LOAD_ATTEMPT',{perPage:perPage});
	},

	_renderOrderDetailsHeader: function() {
		return (
			<div className="panel-title clearfix">
				<div className="pull-left">
					Posts
				</div>
				<div className="pull-right">
					<small>
						<ButtonToolbar>
							<Link className="btn btn-success" style={{color: '#ffffff'}} to={{ name:"add-new-post"}} >
								Create
							</Link>
							<Link className="btn btn-primary" style={{color: '#ffffff'}} to={{ name:"add-new-category"}} >
								Create Category
							</Link>
						</ButtonToolbar>
					</small>
				</div>
			</div>
		);
	},

	render: function() {
		var columns = ['ID', 'Share Image', 'Title', 'Short Description', 'Content', 'Title Image Path', 'Category Id', 'App Id', 'URL', 'Meta Description', 'Edit'];
		var posts = this.state.posts.map(function(post,index) {
			return (
				<Tr key={index}>
					<Td column="ID" value={index} >{post.id}</Td>
					<Td column="Share Image" value={post.share_img} >{post.share_img}</Td>
					<Td column="Title" value={post.title} >{post.title}</Td>
					<Td column="Short Description" value={post.short_description} >{post.short_description}</Td>
					<Td column="Content" value={post.content} >{post.content}</Td>
					<Td column="Title Image Path" value={post.title_img_path} >{post.title_img_path}</Td>
					<Td column="Category Id" value={post.category.name}>{post.category.name}</Td>
					<Td column="App Id" value={post.app.name} >{post.app.name}</Td>
					<Td column="Meta Description" value={post.meta_description} >{post.meta_description}</Td>
					<Td column="URL" value={post.url} >{post.url}</Td>
					<Td column="Edit">
						<ButtonToolbar>
							<Link className="btn btn-success"
								  style={{color: '#ffffff'}} to={{ name: "edit-post", params: { postId: post.id }   }} >
								Edit
							</Link>
						</ButtonToolbar>
					</Td>
				</Tr>
			);
		});

		return (
			<div>
				<Helmet title="Writers" />
				<h2> <span>Blog</span></h2>
				<Panel bsStyle={window.sp.bsStyle_panel} header={this._renderOrderDetailsHeader()} >
					<fieldset disabled={this.state.is_loading}>
						<PaginationForLandings options={['10', '20', '50', '100', '250']} perPage={this.state.perPage} page={this.state.page}
							total={this.state.total} onClick={this._navigateToPage} changePerPage={this._changePerPage} />
						<div style={{margin:-15, marginTop:10, marginBottom:-35}} >
							<div className="table-responsive">
								<Table
									className="table table-hover table-striped table-condensed table-bordered"
									sortable={true}
									columns={columns}
									>
									{posts}
								</Table>
							</div>
						</div>
					</fieldset>

				</Panel>
			</div>
		)
	}
});
module.exports = AdminBlogPanel;