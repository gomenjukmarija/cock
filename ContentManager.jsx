var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var SpeedyPaperActions = require('../actions/SpeedyPaperActions');
var AnnouncementStore = require('../stores/AnnouncementStore');
var UnreadAnnouncementsChecker = require('../components/UnreadAnnouncementsChecker.jsx');
var LandingDetailsContainer = require('../components/content_manager/LandingDetailsContainer.jsx');
var LandingCreateComponent = require('../components/content_manager/LandingCreateComponent.jsx');
var AdminCreatePost = require('../components/blog/AdminCreatePost.jsx');
var AdminCreateCategory = require('../components/blog/AdminCreateCategory.jsx');
var AdminBlogPanel = require('../components/blog/AdminBlogPanel.jsx');
var AdminEditPost = require('../components/blog/AdminEditPost.jsx');
var LandingEditComponent = require('../components/content_manager/LandingEditComponent.jsx');
var LandingsListContainer = require('../components/content_manager/LandingsListContainer.jsx');
var EssayPagesContainer = require('../components/content_manager/EssayPagesContainer.jsx');
var AdminBlogPanel = require('../components/blog/AdminBlogPanel.jsx');
var location = '/'+window.sp.role+'/';


var routes = (

    <Route>
        <Route
            name="landings-details"
            path="seo_content_editing/:landingId"
            component={LandingDetailsContainer}

            onEnter={
                function(next, transition) {
                    setTimeout(() => SpeedyPaperActions.loadMyLanding({landing_id: next.params.landingId}), 0);
                }
            }
            />

        <Route name="get-post" path="get_post" component={AdminBlogPanel} />

        <Route name="add-new-landing" path="add_new_landing" component={LandingCreateComponent} />

        <Route name="add-new-post" path="add_new_post" component={AdminCreatePost} />

        <Route name="add-new-category" path="add_new_category" component={AdminCreateCategory} />

        <Route name="edit-post"
               path="edit-post/:postId"
               component={AdminEditPost}
               onEnter={
                function(next, transition) {
                    setTimeout(() => SpeedyPaperActions.loadMyPosts({post_id: next.params.postId}), 0);
                }
            }
            />

        <Route name="landing-edit"
               path="landing-edit/:landingId"
               component={LandingEditComponent}

               onEnter={
                function(next, transition) {
                    setTimeout(() => SpeedyPaperActions.loadMyLanding({landing_id: next.params.landingId}), 0);
                }
            }
            />

        <Route name="seo_content_editing" path="seo_content_editing" component={LandingsListContainer} />

        <Route name="blog" path="blog" component={AdminBlogPanel} />
        <Route name="essay-pages" path="essay-pages" component={EssayPagesContainer} />

    </Route>
)

module.exports = routes;