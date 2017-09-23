var React = require('react');
var Helmet = require('react-helmet');
var Link = require('react-router').Link;
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var Badge = require('react-bootstrap/lib/Badge');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');
var SpeedyPaperActions = require('../../actions/SpeedyPaperActions');
var BlogStore = require('../../stores/BlogStore');
var BlogListStore = require('../../stores/BlogListStore');

function getState() {
    return {
        app_id: BlogStore.getMyLoadedAppId(),
        renderedFields: 0,
        typed: {},
        disabled:false,
        is_loaded: BlogListStore.isLoaded(),
    };
}

var AdminCreateCategory = React.createClass({

    _submitForm: function(e) {
        e.preventDefault();
        SpeedyPaperActions.a('CREATE_NEW_CATEGORY',this.state);
        this.setState({ typed: {name: '', selected_app_id: ''} });
    },
    onBlur: function(){
        this.setState({disabled:false});
    },
    _cancelForm: function(e) {
        e.preventDefault();
        this.setState({ typed: {name: '', selected_app_id: ''} });
    },
    _handleChanges: function(e){
        var typed = this.state.typed;
        typed[e.target.name] = e.target.value;
        this.setState({typed: typed});
        this._checkStates();
    },

    _checkStates: function() {
        var s = this.state.typed;
        return s.name && s.selected_app_id ? true : false;
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
                                Name
                            </ControlLabel>
                            <div className="col-xs-12 col-sm-9">
                                <FormControl
                                    componentClass="input"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.typed.name}
                                    onChange={(event) => this._handleChanges(event)}
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
                                    defaultValue={"Select an app id"}
                                    onChange={(event) => this._handleChanges(event)}
                                    value={this.state.typed.selected_app_id}
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

module.exports = AdminCreateCategory;