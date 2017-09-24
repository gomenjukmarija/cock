var React = require('react');
var Helmet = require('react-helmet');
var Link = require('react-router').Link;
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');
var SpeedyPaperActions = require('../../actions/SpeedyPaperActions');
var BlogStore = require('../../stores/BlogStore');
var BlogListStore = require('../../stores/BlogListStore');
var Quill = require('react-quill');

function getState() {
    return {
        post_info: BlogStore.getInfo(),
        app_id: BlogStore.getMyLoadedAppId(),
        category: BlogStore.getMyLoadedCategories(),
        is_loaded: BlogStore.getIsLoadedInfo(),
        renderedFields: 0,
        typed: {},// simple fields
        content: '',
    };
}

var AdminEditPost = React.createClass({

    _submitForm: function(e) {
        e.preventDefault();
        const typed = this.state.typed;
        if (this.state.content) {
            typed["content"] = this.state.content;
        }
        this.setState({typed: typed});
        SpeedyPaperActions.a('UPDATE_POST_ATTEMPT',this.state);
    },

    _handleChanges: function(e){
        var typed = this.state.typed;
        typed[e.target.name] = e.target.value;
        this.setState({typed: typed});
    },

    _handleFroalaChange: function(value) {
        this.setState({content: value});
    },


    getInitialState() {
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
        setTimeout(SpeedyPaperActions.a.bind('', 'APP_ID_LOAD_ATTEMPT'), 0);
        setTimeout(SpeedyPaperActions.a.bind('', 'CATEGORIES_LOAD_ATTEMPT'), 0);
    },
    renderedFields: 0,

    render: function() {
        if (this.state.is_loaded) {
            return <div style={{margin:10}}><i className="fa fa-circle-o-notch fa-spin"></i> Loading...</div>
        }
        else  {
            return (
                <div>
                    <Helmet title={"Content editing"} />
                    <h2> <span> </span>
                    </h2>
                    <Panel bsStyle={window.sp.bsStyle_panel} header="Post Editing">
                        <form className="form-horizontal" role="form" >

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Title
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="input"
                                        type="text"
                                        placeholder="Title"
                                        name="title"
                                        defaultValue={this.state.post_info.title}
                                        onChange={(event) => this._handleChanges(event)}
                                        />
                                </div>
                            </div>


                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Short Description
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="textarea"
                                        name="short_description"
                                        defaultValue={this.state.post_info.short_description}
                                        placeholder="Short Description"
                                        onChange={(event) => this._handleChanges(event)}
                                        />
                                </div>
                            </div>

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    App Name
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="select"
                                        type="text"
                                        placeholder="Select an app id"
                                        name="app_id"
                                        defaultValue={this.state.post_info.app_id}
                                        onChange={(event) => this._handleChanges(event)}
                                        >
                                        <option value="select">select</option>
                                        {this.state.app_id.map(function(id,index) {
                                            return (
                                                <option value={id.id} key={index} >
                                                    {id.name}
                                                </option>
                                            );
                                        })}
                                    </FormControl>
                                </div>
                            </div>

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Category
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="select"
                                        type="text"
                                        placeholder="Category Id"
                                        name="category_id"
                                        defaultValue={this.state.post_info.category_id}
                                        onChange={(event) => this._handleChanges(event)}
                                        >
                                        <option value="select">select</option>
                                        {this.state.category.map(function(id,index) {
                                            return (
                                                <option value={id.id} key={index} >
                                                    {id.name}
                                                </option>
                                            );
                                        })}
                                    </FormControl>
                                </div>
                            </div>

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Url
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="input"
                                        type="text"
                                        placeholder="Url"
                                        defaultValue={this.state.post_info.url}
                                        name="url"
                                        onChange={(event) => this._handleChanges(event)}
                                        />
                                </div>
                            </div>

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Image
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <FormControl
                                        componentClass="input"
                                        type="text"
                                        placeholder="Select path to your image"
                                        name="share_img"
                                        defaultValue={this.state.post_info.share_img}
                                        onChange={(event) => this._handleChanges(event)}
                                        />
                                </div>
                            </div>

                            <div className="form-group">
                                <ControlLabel className="col-xs-12 col-sm-3">
                                    Content
                                </ControlLabel>
                                <div className="col-xs-12 col-sm-9">
                                    <Quill
                                        defaultValue={this.state.post_info.content}
                                        modules={{
                                            clipboard: {
                                                matchVisual: false,
                                            }
                                        }}
                                        onChange={this._handleFroalaChange}
                                        style={{ height: 200, resize:"vertical" }}
                                        />

                                </div>
                            </div>

                            <ButtonToolbar style={{marginTop:50, marginRight:5}}>
                                <div className="pull-right">
                                    <Button onClick={this._submitForm} type="submit" bsStyle="success" style={{marginLeft:5}}>Save</Button>
                                    <Link className="btn btn-primary" style={{color: '#ffffff', marginLeft:5}} to={{ name:"blog"}} >
                                        Back
                                    </Link>
                                </div>
                            </ButtonToolbar>
                        </form>
                    </Panel>
                </div>
            );
        }

    }
});

module.exports = AdminEditPost;