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

function getState() {
    return {
        app_id: BlogStore.getMyLoadedAppId(),
        category: BlogStore.getMyLoadedCategories(),
        renderedFields: 0,
        typed: {},
        disabled:false,
        is_loaded: BlogListStore.isLoaded(),
    };
}

var AdminCreatePost = React.createClass({

    _submitForm: function(e) {
        e.preventDefault();
        SpeedyPaperActions.a('CREATE_NEW_POST',this.state);
        this.setState({ typed: {title: '', short_description: '', content: '', selected_app_id: '', category_id: '', url: '', share_img: ''} });
    },
    onBlur: function(){
        this.setState({disabled:false});
    },
    _cancelForm: function(e) {
        e.preventDefault();
        this.setState({ typed: {title: '', short_description: '', content: '', selected_app_id: '', category_id: '', url: '', share_img: ''} });
    },
    _handleChanges: function(e){
        var typed = this.state.typed;
        typed[e.target.name] = e.target.value;
        this.setState({typed: typed});
        this._checkStates();
    },

    _handleChangesField: function(e, field){
        const fields = this.state.fields;
        fields[e.target.name] = fields[e.target.name] || {};
        fields[e.target.name][field] = e.target.value;
        fields[e.target.name][field] = fields[e.target.name][field].replace(/['’”“]/g, "&#8216");
        this.setState({fields: fields});
    },
    _checkStates: function() {
        var s = this.state.typed;
        return s.share_img && s.title && s.url && s.selected_app_id && s.short_description && s.content && s.category_id && s.url ? true : false;
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
        return (
            <div>
                <Helmet title={"Content adding"} />
                <h2> <span> </span>
                </h2>

                <Panel bsStyle={window.sp.bsStyle_panel} header="Category Create">

                    <form ref="form" className="form-horizontal" role="form" >

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
                                    value={this.state.typed.title}
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
                                    value={this.state.typed.short_description}
                                    placeholder="Short Description"
                                    onChange={(event) => this._handleChanges(event)}
                                    style={{ height: 200, resize:"vertical" }}
                                    />
                            </div>
                        </div>

                        <div className="form-group">
                            <ControlLabel className="col-xs-12 col-sm-3">
                                Content
                            </ControlLabel>
                            <div className="col-xs-12 col-sm-9">
                                <FormControl
                                    componentClass="textarea"
                                    name="content"
                                    value={this.state.typed.content}
                                    placeholder="Content"
                                    onChange={(event) => this._handleChanges(event)}
                                    style={{ height: 200, resize:"vertical" }}
                                    />
                            </div>
                        </div>

                        <div className="form-group">
                            <ControlLabel className="col-xs-12 col-sm-3">
                                App id
                            </ControlLabel>
                            <div className="col-xs-12 col-sm-9">
                                <FormControl
                                    componentClass="select"
                                    type="text"
                                    placeholder="Select an app id"
                                    name="selected_app_id"
                                    value={this.state.typed.selected_app_id}
                                    defaultValue={"Select an app id"}
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
                                Category Id
                            </ControlLabel>
                            <div className="col-xs-12 col-sm-9">
                                <FormControl
                                    componentClass="select"
                                    type="text"
                                    placeholder="Category Id"
                                    name="category_id"
                                    value={this.state.typed.category_id}
                                    defaultValue={"Select a category id"}
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
                                    defaultValue={'/'}
                                    name="url"
                                    value={this.state.typed.url}
                                    onChange={(event) => this._handleChanges(event)}
                                    />
                            </div>
                        </div>

                        <div className="form-group">
                            <ControlLabel className="col-xs-12 col-sm-3">
                                Share Img
                            </ControlLabel>
                            <div className="col-xs-12 col-sm-9">
                                <FormControl
                                    componentClass="input"
                                    type="text"
                                    placeholder="Select path to your image"
                                    name="share_img"
                                    value={this.state.typed.share_img}
                                    onChange={(event) => this._handleChanges(event)}
                                    />
                            </div>
                        </div>

                        <ButtonToolbar style={{marginBottom:5, marginRight:5}}>
                            <div className="pull-right">
                                {}
                                <Button onClick={this._cancelForm} bsStyle="danger">Clear</Button>
                                <Button onClick={this._submitForm} disabled={!this._checkStates()} type="submit" bsStyle="success" style={{marginLeft:5}}>Save</Button>
                                <Link className="btn btn-primary" style={{color: '#ffffff', marginLeft:5}} to={{ name:"get-post"}} >
                                    Back
                                </Link>
                            </div>
                        </ButtonToolbar>
                    </form>
                </Panel>
            </div>
        );
    }
});

module.exports = AdminCreatePost;