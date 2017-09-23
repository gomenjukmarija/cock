var AppDispatcher = require('../dispatcher/AppDispatcher');
var SpeedyPaperConstants = require('../constants/SpeedyPaperConstants');

// Define action methods
var SpeedyPaperActions = {
  getMarksAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_MARKS_ATTEMPT,
      data: data
    })
  },

  getMarksSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_MARKS_SUCCESS,
      data: data
    })
  },

  changePage: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHANGE_PAGE,
      data: data
    })
  },

  showAnnouncementModal: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_ANNOUNCEMENT_MODAL,
      data: data
    })
  },

  closeAnnouncementModal: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CLOSE_ANNOUNCEMENT_MODAL,
      data: data
    })
  },

  a: function(constant, data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants[constant],
      data: data
    })
  },

  createVerificationRequest: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_VERIFICATION_REQUEST_ATTEMPT,
      data: data
    })
  },

  verificationRequestSaved: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.VERIFICATION_REQUEST_SAVED,
      data: data
    })
  },

  updateVerificationRequest: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_VERIFICATION_REQUEST,
      data: data
    })
  },

  verificationFilesUploaded: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.VERIFICATION_FILES_UPLOADED,
      data: data
    })
  },

  sendDocuments: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SEND_DOCUMENTS,
      data: data
    })
  },

  createWQCAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_WQC_ATTEMPT,
      data: data
    })
  },

  createWQCSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_WQC_SUCCESS,
      data: data
    })
  },

  updateWQCAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_WQC_ATTEMPT,
      data: data
    })
  },

  updateWQCSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_WQC_SUCCESS,
      data: data
    })
  },

  deleteWQCAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_WQC_ATTEMPT,
      data: data
    })
  },

  deleteWQCSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_WQC_SUCCESS,
      data: data
    })
  },

  // getWQCListAttempt: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.GET_WQC_LIST_ATTEMPT,
  //     data: data
  //   })
  // },

  // getWQCListSuccess: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.GET_WQC_LIST_SUCCESS,
  //     data: data
  //   })
  // },

  createAddPaymentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ADD_PAYMENT_ATTEMPT,
      data: data
    })
  },

  createAddPaymentSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ADD_PAYMENT_SUCCESS,
      data: data
    })
  },

  updateAddPaymentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_ADD_PAYMENT_ATTEMPT,
      data: data
    })
  },

  updateAddPaymentSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_ADD_PAYMENT_SUCCESS,
      data: data
    })
  },

  deleteAddPaymentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_ADD_PAYMENT_ATTEMPT,
      data: data
    })
  },

  deleteAddPaymentSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_ADD_PAYMENT_SUCCESS,
      data: data
    })
  },


  createRevisionAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_REVISION_ATTEMPT,
      data: data
    })
  },

  createRevisionSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_REVISION_SUCCESS,
      data: data
    })
  },

  updateRevisionAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_REVISION_ATTEMPT,
      data: data
    })
  },

  updateRevisionSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_REVISION_SUCCESS,
      data: data
    })
  },

  toggleOrderTracking: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_TOGGLE_TRACKING,
      data: data
    })
  },

  createShiftAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_SHIFT_ATTEMPT,
      data: data
    })
  },

  createShiftSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_SHIFT_SUCCESS,
      data: data
    })
  },
  requestBonusAttempt: function(data) {
    //
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REQUEST_BONUS_ATTEMPT,
      data: data
    })
  },

  requestBonusSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REQUEST_BONUS_SUCCESS,
      data: data
    })
  },
  getSupportBonusRequestListAttempt: function(data) {
    //
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_BONUS_REQUEST_LIST_ATTEMPT,
      data: data
    })
  },

  getSupportBonusRequestListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_BONUS_REQUEST_LIST_SUCCESS,
      data: data
    })
  },
  getBonusRequestListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_BONUS_REQUEST_LIST_ATTEMPT,
      data: data
    })
  },

  getBonusRequestListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_BONUS_REQUEST_LIST_SUCCESS,
      data: data
    })
  },
  updateBonusRequestAttempt: function(data) {
    //
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_BONUS_REQUEST_ATTEMPT,
      data: data
    })
  },

  updateBonusRequestSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_BONUS_REQUEST_SUCCESS,
      data: data
    })
  },
  deleteBonusRequestAttempt: function(data) {
    //
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_BONUS_REQUEST_ATTEMPT,
      data: data
    })
  },

  deleteBonusRequestSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_BONUS_REQUEST_SUCCESS,
      data: data
    })
  },
  deleteShiftAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_SHIFT_ATTEMPT,
      data: data
    })
  },

  deleteShiftSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_SHIFT_SUCCESS,
      data: data
    })
  },
  loadSupportsHoursAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SUPPORTS_HOURS_ATTEMPT,
      data: data
    })
  },

  loadSupportsHoursSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SUPPORTS_HOURS_SUCCESS,
      data: data
    })
  },
  getCurrentShiftAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CURRENT_SHIFT_ATTEMPT,
      data: data
    })
  },
  getCurrentShiftSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CURRENT_SHIFT_SUCCESS,
      data: data
    })
  },
  startShiftAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.START_SHIFT_ATTEMPT,
      data: data
    })
  },
  startShiftSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.START_SHIFT_SUCCESS,
      data: data
    })
  },
  logoutAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOGOUT,
      data: data
    })
  },

  updateShiftAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_SHIFT_ATTEMPT,
      data: data
    })
  },

  updateShiftSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_SHIFT_SUCCESS,
      data: data
    })
  },
  getShiftListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SHIFT_LIST_ATTEMPT,
      data: data
    })
  },
  addShiftToListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_SHIFT_TO_LIST_ATTEMPT,
      data: data
    })
  },
  getShiftListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SHIFT_LIST_SUCCESS,
      data: data
    })
  },

  createTransactionAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_TRANSACTION_ATTEMPT,
      data: data
    })
  },

  createTransactionSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_TRANSACTION_SUCCESS,
      data: data
    })
  },

  showCreditModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_CREDIT_MODAL,
      data: data
    })
  },

  hideCreditModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_CREDIT_MODAL,
      data: data
    })
  },

  getSupportTransactionListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_TRANSACTION_LIST_ATTEMPT,
      data: data
    })
  },

  getSupportTransactionListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_TRANSACTION_LIST_SUCCESS,
      data: data
    })
  },
  stopCheckingOrderPayment: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.STOP_CHECKING_ORDER_PAYMENT,
      data: data
    })
  },


  createFineSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_FINE_SUCCESS,
      data: data
    })
  },

  setUpsaleId: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SET_UPSALE,
      data: data
    })
  },

  loadStatsSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_STATS_SUCCESS,
      data: data
    })
  },

  loadStatsAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_STATS_ATTEMPT,
      data: data
    })
  },

  loadDailyStatsSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_DAILY_STATS_SUCCESS,
      data: data
    })
  },

  loadDailyStatsAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_DAILY_STATS_ATTEMPT,
      data: data
    })
  },

  assignmentSendEmailAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_EMAIL_ATTEMPT,
      data: data
    })
  },

  loadMyOrders: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDERS_LOAD_ATTEMPT,
      data: data
    })
  },

  loadMyLandings: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LANDINGS_LOAD_ATTEMPT,
      data: data
    })
  },


  loadMyPosts: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SPECIFIC_POST_ATTEMPT,
      data: data
    })
  },

  createNewLandingAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_NEW_LANDING_ATTEMPT,
      data: data
    })
  },

  createNewLandingSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_NEW_LANDING_SUCCESS,
      data: data
    })
  },


  deleteLandingAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_LANDING_ATTEMPT,
      data: data
    })
  },

  deleteLandingSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_LANDING_SUCCESS,
      data: data
    })
  },
  changeDeleteLandingState: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHANGE_DELETE_LANDING_STATE_ATTEMPT,
      data: data
    })
  },
  updateLandingAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_LANDING_ATTEMPT,
      data: data
    })
  },
  updateLandingSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_LANDING_SUCCESS,
      data: data
    })
  },
   changeUpdatedLandingState: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHANGE_UPDATE_LANDING_STATE_ATTEMPT,
      data: data
    })
  },

  loadMyNotifications: function(data) {

    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTIFICATIONS_LOAD_ATTEMPT,
      data: data
    })
  },

  assignWriter: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGN_WRITER,
      data: data
    })
  },

  refreshWriter: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_WRITER_DETAILS,
      data: data
    })
  },

  writerDetailsLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WRITER_DETAILS_LOADED,
      data: data
    })
  },

  writerListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WRITER_LIST_LOADED,
      data: data
    })
  },

  setAutoAssigned: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SET_AUTO_ASSIGNED,
      data: data
    })
  },

  addWriters: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_WRITERS_ATTEMPT,
      data: data
    })
  },

  addWritersSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_WRITERS_SUCCESS,
      data: data
    })
  },

  writersActivatedListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WRITERS_ACTIVATED_LIST_LOADED,
      data: data
    })
  },

  writerMatchingIpListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WRITER_MATCHING_IP_LIST_LOADED,
      data: data
    })
  },
  matchingIpListLoadAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MATCHING_IP_LIST_LOAD_ATTEMPT,
      data: data
    })
  },

  writerMatchingIpSingleListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WRITER_MATCHING_IP_SINGLE_LIST_LOADED,
      data: data
    })
  },

  webmasterListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WEBMASTER_LIST_LOAD_SUCCESS,
      data: data
    })
  },

  refreshSupport: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SUPPORT_DETAILS,
      data: data
    })
  },

  supportDetailsLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_DETAILS_LOADED,
      data: data
    })
  },

  supportListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_LIST_LOADED,
      data: data
    })
  },

  loadAssignmentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_LOAD_ATTEMPT,
      data: data
    })
  },

  loadAssignmentSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_LOAD_SUCCESS,
      data: data
    })
  },

  changeAssignmentSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_CHANGE_SUCCESS,
      data: data
    })
  },

  updateAssignmentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_UPDATE_ATTEMPT,
      data: data
    })
  },

  createAssignmentAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_CREATE_ATTEMPT,
      data: data
    })
  },

  // createAssignmentSuccess: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.ASSIGNMENT_CREATE_SUCCESS,
  //     data: data
  //   })
  // },

  changeAssignment: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_CHANGE,
      data: data
    })
  },

  //@rex
  checkSupportMessages: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_MESSAGES_LOAD_ATTEMPT,
      data: data
    })
  },

  //@rex
  supportMessagesLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_MESSAGES_LOAD_SUCCESS,
      data: data
    })
  },

  checkUnreadMessages: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UNREAD_MESSAGES_LOAD_ATTEMPT,
      data: data
    })
  },

  //@rex
  checkSupportMessages: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_MESSAGES_LOAD_ATTEMPT,
      data: data
    })
  },

  unreadMessagesLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UNREAD_MESSAGES_LOAD_SUCCESS,
      data: data
    })
  },

  //@rex
  supportMessagesLoaded:  function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SUPPORT_MESSAGES_LOAD_SUCCESS,
      data: data
    })
  },

  payForOrder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_PAY_ATTEMPT,
      data: data
    })
  },

  clientDetailsLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CLIENT_DETAILS_LOADED,
      data: data
    })
  },

  priceGroupsLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.PRICE_GROUP_LIST_LOADED,
      data: data
    })
  },

  addFilter: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_FILTER,
      data: data
    })
  },

  setFilters: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SET_FILTERS,
      data: data
    })
  },

  updateFilter: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_FILTER,
      data: data
    })
  },

  removeFilter: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_FILTER,
      data: data
    })
  },

  updateSorting: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_SORTING,
      data: data
    })
  },

  userListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.USER_LIST_LOADED,
      data: data
    })
  },

  unusualUsersListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UNUSUAL_USERS_LIST_LOADED,
      data: data
    })
  },

  toggleMenu: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.TOGGLE_MENU,
      data: data
    })
  },

  verifyDiscountAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISCOUNT_VERIFY_ATTEMPT,
      data: data
    })
  },

  verifyDiscountSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISCOUNT_VERIFY_SUCCESS,
      data: data
    })
  },

  verifyDiscountError: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISCOUNT_VERIFY_ERROR,
      data: data
    })
  },

  changeDiscountCode: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISCOUNT_CODE_CHANGE,
      data: data
    })
  },

  stateChange: function(data) {
    var actionType;
    switch(data.name) {

      case 'paperTypes':
        actionType = SpeedyPaperConstants.PAPER_TYPE_CHANGE;
        break;
      case 'workTypes':
        actionType = SpeedyPaperConstants.WORK_TYPE_CHANGE;
        break;
      case 'paperDetails':
        actionType = SpeedyPaperConstants.PAPER_DETAILS_CHANGE;
        break;
      case 'exactDeadline':
        actionType = SpeedyPaperConstants.EXACT_DEADLINE_CHANGE;
        break;
      case 'academicLevels':
      case 'additionalFiles':
      case 'deadlines':
      case 'description':
      case 'pages':
      case 'paperFormats':
      case 'problems':
      case 'slides':
      case 'sources':
      case 'spacings':
      case 'subjects':
      case 'topic':
        actionType = SpeedyPaperConstants.COMMON_STATE_CHANGE;
        break;


      case 'email':
      case 'password':
      case 'phone':
      case 'remember':
      case 'passwordShown':
      case 'existingUser':
      case 'fileStatuses':
        actionType = SpeedyPaperConstants.USER_STATE_CHANGE;
        break;
      default:
        break;
    }
    AppDispatcher.handleAction({
      actionType: actionType,
      data: data
    })
  },

  // // Change academic level
  // changeAcademicLevel: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.ACADEMIC_LEVEL_CHANGE,
  //     data: data
  //   })
  // },

  // // Change type of paper
  // changePaperType: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.PAPER_TYPE_CHANGE,
  //     data: data
  //   })
  // },

  createInquiryAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.INQUIRY_CREATE_ATTEMPT,
      data: data
    })
  },

  createInquirySuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.INQUIRY_CREATE_SUCCESS,
      data: data
    })
  },

  updateOrder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_UPDATE,
      data: data
    })
  },

  deleteOrder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_DELETE,
      data: data
    })
  },

  resetPassword: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.RESET_PASSWORD_ATTEMPT,
      data: data
    })
  },

  forgotPassword: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.FORGOT_PASSWORD_ATTEMPT,
      data: data
    })
  },

  messagesLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGES_LOADED,
      data: data
    })
  },

  messageAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_ATTEMPT,
      data: data
    })
  },

  deleteMessage: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_DELETE,
      data: data
    })
  },

  messageSent: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_SENT,
      data: data
    })
  },

  messageRead: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_READ,
      data: data
    })
  },

  markAsReadAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_READ_ATTEMPT,
      data: data
    })
  },

  markAsReadSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MESSAGE_READ_SUCCESS,
      data: data
    })
  },

  addReminder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_ADD_ATTEMPT,
      data: data
    })
  },

  reminderAdded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_ADD_SUCCESS,
      data: data
    })
  },

  loadReminders: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_LIST_LOAD_ATTEMPT,
      data: data
    })
  },

  remindersLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_LIST_LOAD_SUCCESS,
      data: data
    })
  },

  updateRemindersList: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_LIST_UPDATE,
      data: data
    })
  },

  updateReminder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_UPDATE_ATTEMPT,
      data: data
    })
  },

  deleteReminder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMINDER_DELETE_ATTEMPT,
      data: data
    })
  },

//////////////////
  addNote: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTE_ADD_ATTEMPT,
      data: data
    })
  },

  deleteNote: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTE_DELETE,
      data: data
    })
  },

  noteAdded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTE_ADD_SUCCESS,
      data: data
    })
  },

  createOrderAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_CREATE_ATTEMPT,
      data: data
    })
  },

  addFiles: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_FILES,
      data: data
    })
  },

  removeFile: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_FILE,
      data: data
    })
  },

  removeUploadedFile: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_UPLOADED_FILE,
      data: data
    })
  },

  uploadFiles: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPLOAD_FILES,
      data: data
    })
  },

  refreshMyOrder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_FORCE_REFRESH,
      data: data
    })
  },

  loadMyLanding: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SPECIFIC_LANDING_ATTEMPT,
      data: data
    })
  },

  orderMessagesLoadAttempt: function(data) { // @paperflamed added
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_MESSAGES_LOAD_ATTEMPT,
      data: data
    })
  },

  orderFilesLoadAttempt: function(data) { // @paperflamed added
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_FILES_LOAD_ATTEMPT,
      data: data
    })
  },

  refreshMyNotification: function(data) {

    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTIFICATION_FORCE_REFRESH,
      data: data
    })
  },

  createOrderSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_CREATE_SUCCESS,
      data: data
    })
  },

  displayAlert: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SIGN_UP_IN_ALERT,
      data: data
    })
  },

  displayError: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SIGN_UP_IN_ERROR,
      data: data
    })
  },

  logOut: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOG_OUT,
      data: data
    })
  },

  // setMyOrders: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.SET_MY_ORDERS,
  //     data: data
  //   })
  // },

  loadedOrders: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDERS_LOADED,
      data: data
    })
  },

  loadedLandings: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LANDINGS_LOADED,
      data: data
    })
  },

  loadedNotifications: function(data) {

    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTIFICATIONS_LOADED,
      data: data
    })
  },

  addFilterNotification: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ADD_FILTER_NOTIFICATION,
      data: data
    })
  },

  updateFilterNotification: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_FILTER_NOTIFICATION,
      data: data
    })
  },

  fullTextSearchNotification: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.FULL_TEXT_SEARCH_NOTIFICATION,
      data: data
    })
  },

  searchChatIdAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SEARCH_CHAT_ID_ATTEMPT,
      data: data
    })
  },

  searchChatIdSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SEARCH_CHAT_ID_SUCCESS,
      data: data
    })
  },

  removeFilterNotification: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_FILTER_NOTIFICATION,
      data: data
    })
  },

  tryUpdateUser: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_USER_ATTEMPT,
      data: data
    })
  },

  tryUpdateUserRiskLevel: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_USER_RISK_LEVEL,
      data: data
    })
  },

  updatedUser: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_USER_SUCCESS,
      data: data
    })
  },

  trySignUp: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SIGN_UP_ATTEMPT,
      data: data
    })
  },

  trySignIn: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SIGN_IN_ATTEMPT,
      data: data
    })
  },

  signIn: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SIGN_IN_SUCCESS,
      data: data
    })
  },

  changePasswordAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHANGE_PASSWORD_ATTEMPT,
      data: data
    })
  },

  changePasswordSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHANGE_PASSWORD_SUCCESS,
      data: data
    })
  },

  // Will show calculator, have to  reset stuff
  willShowCalculator: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WILL_SHOW_CALCULATOR,
      data: data
    })
  },

  deliverOrder: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDERS_DELIVER_ATTEMPT,
      data: data
    })
  },

  markAssignments: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ASSIGNMENT_LIST_MARK,
      data: data
    })
  },

  checkPurseAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHECK_PURSE_ATTEMPT,
      data: data
    })
  },

  checkPurseSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CHECK_PURSE_SUCCESS,
      data: data
    })
  },

  transitionURL: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.URL_TRANSITION_SUCCESS,
      data: data
    })
  },

  priceGroupsLoadAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.PRICE_GROUP_LIST_ATTEMPT,
      data: data
    })
  },

  filesUploadSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.FILES_UPLOAD_SUCCESS,
      data: data
    })
  },

  loadClientListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_CLIENT_LIST_ATTEMPT,
      data: data
    })
  },

  loadUnusualUsersList: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_UNUSUAL_USERS_LIST_ATTEMPT,
      data: data
    })
  },

  loadClientDetailsAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_CLIENT_DETAILS_ATTEMPT,
      data: data
    })
  },

  loadClientActionsAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_CLIENT_ACTIONS_ATTEMPT,
      data: data
    })
  },

  loadClientActionsSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_CLIENT_ACTIONS_SUCCESS,
      data: data
    })
  },

  orderLoadSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_LOAD_SUCCESS,
      data: data
    })
  },
  loadSpecificLandingSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SPECIFIC_LANDING_SUCCESS,
      data: data
    })
  },

  orderMessagesLoadSuccess: function(data) {//@paperflamed added
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_MESSAGES_LOAD_SUCCESS,
      data: data
    })
  },

  orderFilesLoadSuccess: function(data) {//@paperflamed added
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_FILES_LOAD_SUCCESS,
      data: data
    })
  },

  notificationLoadSuccess: function(data) {

    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTIFICATION_LOAD_SUCCESS,
      data: data
    })
  },

  notificationSearchSuccess: function(data) {

    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.NOTIFICATION_SEARCH_SUCCESS,
      data: data
    })
  },

  webmasterListLoadAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WEBMASTER_LIST_LOAD_ATTEMPT,
      data: data
    })
  },

  orderUpdateSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ORDER_UPDATE_SUCCESS,
      data: data
    })
  },

  giveUserToWM: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GIVE_USER_TO_WM_ATTEMPT,
      data: data
    })
  },

  bootstrapAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.BOOTSTRAP_ATTEMPT,
      data: data
    })
  },

  bootstrapSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.BOOTSTRAP_SUCCESS,
      data: data
    })
  },

  disableLoadingState: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISABLE_LOADING_STATE,
      data: data
    })
  },

  setErrors: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SET_ERRORS,
      data: data
    })
  },

  dismissErrors: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISMISS_ERRORS,
      data: data
    })
  },

  dismissAlerts: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DISMISS_ALERTS,
      data: data
    })
  },

  setAlerts: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SET_ALERTS,
      data: data
    })
  },

  activateWriterAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ACTIVATE_WRITER_ATTEMPT,
      data: data
    })
  },

  getActivatedAttempt: function() {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ACTIVATED_WRITERS_ATTEMPT,
    })
  },

  activateWriterSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ACTIVATE_WRITER_SUCCESS,
      data: data
    })
  },

  deleteWriterSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_WRITER_SUCCESS,
      data: data
    })
  },

  dropEssayAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DROP_ESSAY_ATTEMPT,
      data: data
    })
  },

  dropEssaySuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DROP_ESSAY_SUCCESS,
      data: data
    })
  },

  savePriceGroupAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SAVE_PRICE_GROUP_ATTEMPT,
      data: data
    })
  },

  savePriceGroupSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SAVE_PRICE_GROUP_SUCCESS,
      data: data
    })
  },

  loadAnnouncementListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ANNOUNCEMENT_LIST_ATTEMPT,
      data: data
    })
  },

  announcementListLoaded: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.ANNOUNCEMENT_LIST_LOADED,
      data: data
    })
  },

  loadAnnouncementDetailsAttempt: function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ANNOUNCEMENT_DETAILS_ATTEMPT,
      data: data
    })
  },

  loadAnnouncementDetailsSuccess: function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ANNOUNCEMENT_DETAILS_SUCCESS,
      data: data
    })
  },

  updateAnnouncementAttempt:  function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_ANNOUNCEMENT_ATTEMPT,
      data: data
    })
  },

  updateAnnouncementSuccess:  function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_ANNOUNCEMENT_SUCCESS,
      data: data
    })
  },

  createAnnouncementAttempt:  function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ANNOUNCEMENT_ATTEMPT,
      data: data
    })
  },

  createAnnouncementSuccess:  function(data){
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ANNOUNCEMENT_SUCCESS,
      data: data
    })
  },

  loadAnnouncementsAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ANNOUNCEMENTS_ATTEMPT,
      data: data
    })
  },

  loadAnnouncementsSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ANNOUNCEMENTS_SUCCESS,
      data: data
    })
  },

  markAnnouncementAsReadAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MARK_ANNOUNCEMENTS_AS_READ_ATTEMPT,
      data: data
    })
  },

  markAnnouncementAsReadSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.MARK_ANNOUNCEMENTS_AS_READ_SUCCESS,
      data: data
    })
  },

  removeAnnouncementAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_ANNOUNCEMENT_ATTEMPT,
      data: data
    })
  },

  removeAnnouncementSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REMOVE_ANNOUNCEMENT_SUCCESS,
      data: data
    })
  },

  getUserReviewListAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_USER_REVIEW_LIST_ATTEMPT,
      data: data
    })
  },

  getUserReviewListSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_USER_REVIEW_LIST_SUCCESS,
      data: data
    })
  },

  getOrderReviewListAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_LIST_ATTEMPT,
      data: data
    })
  },

  getOrderReviewListSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_LIST_SUCCESS,
      data: data
    })
  },

  getReviewListAttempt: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_LIST_ATTEMPT,
      data: data
    })
  },

  getReviewListSuccess: function(data) {
  AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_LIST_SUCCESS,
      data: data
    })
  },

  // getReviewCategoryListAttempt: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.GET_REVIEW_CATEGORY_LIST_ATTEMPT,
  //     data: data
  //   })
  // },
  //
  // getReviewCategoryListSuccess: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.GET_REVIEW_CATEGORY_LIST_SUCCESS,
  //     data: data
  //   })
  // },

  getOrderReviewAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_ATTEMPT,
      data: data
    })
  },

  getOrderReviewSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_SUCCESS,
      data: data
    })
  },

  createOrderReviewAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ORDER_REVIEW_ATTEMPT,
      data: data
    })
  },

  createOrderReviewSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_ORDER_REVIEW_SUCCESS,
      data: data
    })
  },

  getDiscountTypesAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_DISCOUNT_TYPES_ATTEMPT,
      data : data
    })
  },

  getDiscountTypesSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_DISCOUNT_TYPES_SUCCESS,
      data : data
    })
  },

  getDiscountListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_DISCOUNT_LIST_ATTEMPT,
      data : data
    })
  },

  getDiscountListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_DISCOUNT_LIST_SUCCESS,
      data : data
    })
  },

  createDiscountTypesAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CREATE_DISCOUNT_TYPES_ATTEMPT,
      data : data
    })
  },

  createDiscountTypesSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CREATE_DISCOUNT_TYPES_SUCCESS,
      data : data
    })
  },

  createDiscountListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CREATE_DISCOUNT_LIST_ATTEMPT,
      data : data
    })
  },

  createDiscountListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CREATE_DISCOUNT_LIST_SUCCESS,
      data : data
    })
  },

  updateDiscountListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_DISCOUNT_ATTEMPT,
      data : data
    })
  },

  updateDiscountListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_DISCOUNT_SUCCESS,
      data : data
    })
  },

  updateDiscountTypeAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_DISCOUNT_TYPE_ATTEMPT,
      data : data
    })
  },

  updateDiscountTypeSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_DISCOUNT_TYPE_SUCCESS,
      data : data
    })
  },

  getTransactionListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_TRANSACTION_LIST_ATTEMPT,
      data : data,
    })
  },

  getTransactionListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_TRANSACTION_LIST_SUCCESS,
      data:data,
    })
  },

  addFilterTransaction : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.ADD_FILTER_TRANSACTION,
      data:data,
    })
  },

  updateFilterTransaction : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_FILTER_TRANSACTION,
      data:data,
    })
  },

  removeFilterTransaction : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.REMOVE_FILTER_TRANSACTION,
      data:data,
    })
  },

  updatePresets :  function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_PRESETS,
      data:data,
    })
  },

  removePresets :  function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.REMOVE_PRESETS,
      data:data,
    })
  },

  updateReviewStatusAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_REVIEW_STATUS_ATTEMPT,
      data : data
    })
  },

  updateReviewStatusSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_REVIEW_STATUS_SUCCESS,
      data : data
    })
  },

  getUnprocessedCallbackListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_UNPROCESSED_CALLBACK_LIST_ATTEMPT,
      data : data,
    })
  },

  getUnprocessedCallbackListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_UNPROCESSED_CALLBACK_LIST_SUCCESS,
      data : data,
    })
  },

  updateCallbackAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_CALLBACK_ATTEMPT,
      data : data,
    })
  },

  updateCallbackSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_CALLBACK_SUCCESS,
      data : data,
    })
  },

  getProcessedCallbackListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_PROCESSED_CALLBACK_LIST_ATTEMPT,
      data : data,
    })
  },

  getProcessedCallbackListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.GET_PROCESSED_CALLBACK_LIST_SUCCESS,
      data : data,
    })
  },

  loadWriterListAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.WRITER_LIST_ATTEMPT,
      data : data,
    })
  },

  loadWriterListSuccess : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.WRITER_LIST_SUCCESS,
      data : data,
    })
  },

  addFilterForWriter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.ADD_FILTER_FOR_WRITER,
      data : data,
    })
  },

  updateFilterForWriter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_FILTER_FOR_WRITER,
      data : data,
    })
  },

  removeFilterForWriter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.REMOVE_FILTER_FOR_WRITER,
      data : data,
    })
  },

  addFilterForClient : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.ADD_FILTER_FOR_CLIENT,
      data : data,
    })
  },

  updateFilterForClient : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.UPDATE_FILTER_FOR_CLIENT,
      data : data,
    })
  },

  removeFilterForClient : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.REMOVE_FILTER_FOR_CLIENT,
      data : data,
    })
  },

  setWriterFilter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.WRITER_FILTERS_C_AND_A,
      data:data
    })
  },

  clearWriterFilters : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.WRITER_FILTERS_CLEAR,
      data:data,
    })
  },

  setClientFilter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CLIENT_FILTERS_C_AND_A,
      data:data
    })
  },

  clearUnusualUsersFilter : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CLEAR_UNUSUAL_USERS_FILTER,
      data:data,
    })
  },

  clearClientFilters : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.CLIENT_FILTERS_CLEAR,
      data:data,
    })
  },

  deleteTransactionAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.DELETE_TRANSACTION_ATTEMPT,
      data:data,
    })
  },

  restoreTransactionAttempt : function(data)
  {
    AppDispatcher.handleAction({
      actionType:SpeedyPaperConstants.RESTORE_TRANSACTION_ATTEMPT,
      data:data,
    })
  },

  /*tveng*/
  webmasterCutListLoadAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WEBMASTER_CUT_LIST_LOAD_ATTEMPT,
      data: data
    })
  },

  webmasterCutListLoadSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.WEBMASTER_CUT_LIST_LOAD_SUCCESS,
      data: data
    })
  },

  reviewFilterChanged: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.REVIEW_FILTER_CHANGED,
      data: data
    })
  },

  showManageReviewModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_MANAGE_REVIEW_MODAL,
      data: data
    })
  },
  showCancellationModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_CANCELLATION_MODAL,
      data: data
    })
  },

  hideCancellationModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_CANCELLATION_MODAL,
      data: data
    })
  },

  saveCancellationRequest: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SAVE_CANCELLATION_REQUEST,
      data: data
    })
  },

  cancellationRequestsSaved: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUEST_SAVED,
      data: data
    })
  },

  cancellationRequestsDeleted: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUEST_WAS_DELETED,
      data: data
    })
  },

  cancellationResolve: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUEST_RESOLVE,
      data: data
    })
  },

  cancellationDelete: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUEST_DELETE,
      data: data
    })
  },

  loadCancellationList: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_CANCELLATION_REQUESTS_LIST_ATTEMPT,
      data: data
    })
  },

  cancellationListLoaded: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUESTS_LIST_LOADED,
      data: data
    })
  },

  clearFilterForCancellationList: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CLEAR_CANCELLATION_REQUESTS_FILTER,
      data: data
    })
  },

  cancellationUnresolve: function (data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CANCELLATION_REQUEST_UNRESOLVE,
      data: data
    })
  },
  hideManageReviewModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_MANAGE_REVIEW_MODAL,
      data: data
    })
  },

  getClientGrudgeListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CLIENT_GRUDGE_LIST_ATTEMPT,
      data: data
    })
  },

  getClientGrudgeListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CLIENT_GRUDGE_LIST_SUCCESS,
      data: data
    })
  },

  getReviewActionTypeListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_ACTION_TYPE_LIST_ATTEMPT,
      data: data
    })
  },

  getReviewActionTypeListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_ACTION_TYPE_LIST_SUCCESS,
      data: data
    })
  },

  createReviewActionAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_REVIEW_ACTION_ATTEMPT,
      data: data
    })
  },

  createReviewActionSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_REVIEW_ACTION_SUCCESS,
      data: data
    })
  },

  updateReviewActionAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_REVIEW_ACTION_ATTEMPT,
      data: data
    })
  },

  updateReviewActionSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_REVIEW_ACTION_SUCCESS,
      data: data
    })
  },

  getReviewActionListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_ACTION_LIST_ATTEMPT,
      data: data
    })
  },

  getReviewActionListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_REVIEW_ACTION_LIST_SUCCESS,
      data: data
    })
  },

  getOrderReviewActionListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_ACTION_LIST_ATTEMPT,
      data: data
    })
  },

  getOrderReviewActionListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_ORDER_REVIEW_ACTION_LIST_SUCCESS,
      data: data
    })
  },

  getChatListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CHAT_LIST_ATTEMPT,
      data: data
    })
  },

  getChatListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CHAT_LIST_SUCCESS,
      data: data
    })
  },

  showChatDetailsModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_CHAT_DETAILS_MODAL,
      data: data
    })
  },

  hideChatDetailsModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_CHAT_DETAILS_MODAL,
      data: data
    })
  },

  getChatDetailsAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CHAT_DETAILS_ATTEMPT,
      data: data
    })
  },

  getChatDetailsSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CHAT_DETAILS_SUCCESS,
      data: data
    })
  },

  getClientReviewActionListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CLIENT_REVIEW_ACTION_LIST_ATTEMPT,
      data: data
    })
  },

  getClientReviewActionListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_CLIENT_REVIEW_ACTION_LIST_SUCCESS,
      data: data
    })
  },

  loadActiveInActiveWritersListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ACTIVE_INACTIVE_LIST_ATTEMPT,
      data: data
    })
  },

  loadActiveInActiveWritersListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_ACTIVE_INACTIVE_LIST_SUCCESS,
      data: data
    })
  },

  showViolationModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_VIOLATION_MODAL,
      data: data
    })
  },

  hideViolationModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_VIOLATION_MODAL,
      data: data
    })
  },

  createViolationAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_VIOLATION_ATTEMPT,
      data: data
    })
  },

  createViolationSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.CREATE_VIOLATION_SUCCESS,
      data: data
    })
  },

  getSupportRuleListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_RULE_LIST_ATTEMPT,
      data: data
    })
  },

  getSupportRuleListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_SUPPORT_RULE_LIST_SUCCESS,
      data: data
    })
  },

  getViolationListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_VIOLATION_LIST_ATTEMPT,
      data: data
    })
  },

  getViolationListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_VIOLATION_LIST_SUCCESS,
      data: data
    })
  },

  deleteViolationAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_VIOLATION_ATTEMPT,
      data: data
    })
  },

  deleteViolationSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_VIOLATION_SUCCESS,
      data: data
    })
  },

  showFineSupportModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_FINE_SUPPORT_MODAL,
      data: data
    })
  },

  hideFineSupportModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_FINE_SUPPORT_MODAL,
      data: data
    })
  },

  updateChatStatusAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_CHAT_STATUS_ATTEMPT,
      data: data
    })
  },

  updateChatStatusSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_CHAT_STATUS_SUCCESS,
      data: data
    })
  },

  getPhoneCallListAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_PHONE_CALL_LIST_ATTEMPT,
      data: data
    })
  },

  getPhoneCallListSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.GET_PHONE_CALL_LIST_SUCCESS,
      data: data
    })
  },

  updatePhoneCallAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_PHONE_CALL_ATTEMPT,
      data: data
    })
  },

  updatePhoneCallSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_PHONE_CALL_SUCCESS,
      data: data
    })
  },

  updateViolationAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_VIOLATION_ATTEMPT,
      data: data
    })
  },

  updateViolationSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.UPDATE_VIOLATION_SUCCESS,
      data: data
    })
  },

  deleteViolationAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_VIOLATION_ATTEMPT,
      data: data
    })
  },

  deleteViolationSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_VIOLATION_SUCCESS,
      data: data
    })
  },

  deleteRestoreOrderAttempt: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_OR_RESTORE_ORDER_ATTEMPT,
      data: data
    })
  },

  deleteRestoreOrderSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_OR_RESTORE_ORDER_SUCCESS,
      data: data
    })
  },
  deleteRestoreLandingSuccess: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.DELETE_OR_RESTORE_LANDING_SUCCESS,
      data: data
    })
  },


  // ReviewsLoadAttempt: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.REVIEWS_LOAD_ATTEMPT,
  //     data: data
  //   })
  // },

  // ReviewsLoaded: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.REVIEWS_LOADED,
  //     data: data
  //   })
  // },

  // ReviewLoadAttempt: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.REVIEW_LOAD_ATTEMPT,
  //     data: data
  //   })
  // },

  // ReviewLoadSuccess: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.REVIEW_LOAD_SUCCESS,
  //     data: data
  //   })
  // },

  // addFilterReview: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.ADD_FILTER_REVIEW,
  //     data: data
  //   })
  // },

  // updateFilterReview: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.UPDATE_FILTER_REVIEW,
  //     data: data
  //   })
  // },

  // removeFilterReview: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.REMOVE_FILTER_REVIEW,
  //     data: data
  //   })
  // },

  // updateSortingReview: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: SpeedyPaperConstants.UPDATE_SORTING_REVIEW,
  //     data: data
  //   })
  // },

  violationFilterChanged: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.VIOLATION_FILTER_CHANGED,
      data: data
    })
  },

  showCreditModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.SHOW_CREDIT_MODAL,
      data: data
    })
  },

  hideCreditModal: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.HIDE_CREDIT_MODAL,
      data: data
    })
  },
  loadMyLanding: function(data) {
    AppDispatcher.handleAction({
      actionType: SpeedyPaperConstants.LOAD_SPECIFIC_LANDING_ATTEMPT,
      data: data
    })
  },

};

module.exports = SpeedyPaperActions;