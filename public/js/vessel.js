<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>MTL Dashboard</title>
    <!-- plugins:css -->
    <script src="/js/portInfo.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
    <link rel="stylesheet" href="/feather/feather.css" />
    <link rel="stylesheet" href="/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="/ti-icons/css/themify-icons.css"/>
    <link rel="stylesheet"  src="/typicons/typicons.css" />
    <link rel="stylesheet"  href="/simple-line-icons/css/simple-line-icons.css"/>
    <link rel="stylesheet"  href="/css/vendor.bundle.base.css" />
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Include DataTables -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css" />

    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet"  href="/css/style.css" />
    <!-- endinject -->
    <link rel="shortcut icon"  href="/images/favicon.png" />
    <script src='https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/leaflet.markercluster.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/MarkerCluster.css' rel='stylesheet' />
    <link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/MarkerCluster.Default.css' rel='stylesheet' />
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
  </head>
    
<body>
  <div class="container-scroller">
    <!-- partial:/partials/_navbar.html -->
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div class="me-3">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
            <span class="icon-menu"></span>
          </button>
        </div>
        <div>
          <a class="navbar-brand brand-logo" href="/index.html">
              <img src="https://www.mtlb.co.kr/wp-content/uploads/2019/07/%ED%81%B0%EC%82%AC%EC%9D%B4%EC%A6%88_MTL%EB%A1%9C%EA%B3%A0_%ED%8C%8C%EB%9E%80%EA%B8%80%EC%94%A8.png" width="100%" alt="logo" />
            </a>
            <a class="navbar-brand brand-logo-mini" href="../../index.html">
              <img src="https://www.mtlb.co.kr/wp-content/uploads/2019/07/%ED%81%B0%EC%82%AC%EC%9D%B4%EC%A6%88_MTL%EB%A1%9C%EA%B3%A0_%ED%8C%8C%EB%9E%80%EA%B8%80%EC%94%A8.png" alt="logo" />
            </a>
        </div>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-top"> 
        <ul class="navbar-nav">
          <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
            
            <h1 class="welcome-text">국가별 <span class="text-black fw-bold">항구 현황</span></h1>
            <h3 class="welcome-sub-text">Your performance summary this week </h3>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown d-none d-lg-block">
            <a class="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Select Category </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
              <a class="dropdown-item py-3">
                <p class="mb-0 font-weight-medium float-left">Select category</p>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Bootstrap Bundle </p>
                  <p class="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Angular Bundle</p>
                  <p class="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">VUE Bundle</p>
                  <p class="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin Dashboard</p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">React Bundle</p>
                  <p class="fw-light small-text mb-0">Bundle of 8 Premium React Admin Dashboard</p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item d-none d-lg-block">
            <div id="datepicker-popup" class="input-group date datepicker navbar-date-picker">
              <span class="input-group-addon input-group-prepend border-right">
                <span class="icon-calendar input-group-text calendar-icon"></span>
              </span>
              <input type="text" class="form-control">
            </div>
          </li>
          <li class="nav-item">
            <form class="search-form" action="#">
              <i class="icon-search"></i>
              <input type="search" class="form-control" placeholder="Search Here" title="Search here">
            </form>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
              <i class="icon-mail icon-lg"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
              <a class="dropdown-item py-3 border-bottom">
                <p class="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                <span class="badge badge-pill badge-primary float-right">View all</span>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-alert m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject fw-normal text-dark mb-1">Application Error</h6>
                  <p class="fw-light small-text mb-0"> Just now </p>
                </div>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-settings m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject fw-normal text-dark mb-1">Settings</h6>
                  <p class="fw-light small-text mb-0"> Private message </p>
                </div>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-airballoon m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                  <p class="fw-light small-text mb-0"> 2 days ago </p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown"> 
            <a class="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="icon-bell"></i>
              <span class="count"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
              <a class="dropdown-item py-3">
                <p class="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                <span class="badge badge-pill badge-primary float-right">View all</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img src="" alt="image" class="img-sm profile-pic">
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                  <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img src="" alt="image" class="img-sm profile-pic">
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                  <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img src="" alt="image" class="img-sm profile-pic">
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                  <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown d-none d-lg-block user-dropdown">
            <a class="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="img-xs rounded-circle" src="" alt="Profile image"> </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              <div class="dropdown-header text-center">
                <img class="img-md rounded-circle" src="" alt="Profile image">
                <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                <p class="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
              </div>
              <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile <span class="badge badge-pill badge-danger">1</span></a>
              <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages</a>
              <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity</a>
              <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ</a>
              <a class="dropdown-item"><i class="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:/partials/_settings-panel.html -->
      <div class="theme-setting-wrapper">
        <div id="settings-trigger"><i class="ti-settings"></i></div>
        <div id="theme-settings" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border me-3"></div>Light</div>
          <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border me-3"></div>Dark</div>
          <p class="settings-heading mt-2">HEADER SKINS</p>
          <div class="color-tiles mx-0 px-4">
            <div class="tiles success"></div>
            <div class="tiles warning"></div>
            <div class="tiles danger"></div>
            <div class="tiles info"></div>
            <div class="tiles dark"></div>
            <div class="tiles default"></div>
          </div>
        </div>
      </div>
      <div id="right-sidebar" class="settings-panel">
        <i class="settings-close ti-close"></i>
        <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div class="tab-content" id="setting-content">
          <div class="tab-pane fade show active scroll-wrapper ps" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div class="add-items d-flex px-3 mb-0">
              <form class="form w-100">
                <div class="form-group d-flex">
                  <input type="text" class="form-control todo-list-input" placeholder="Add To-do">
                  <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div class="list-wrapper px-3">
              <ul class="d-flex flex-column-reverse todo-list">
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox">
                      Team review meeting at 3.00 PM
                    <i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox">
                      Prepare for presentation
                    <i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox">
                      Resolve all the low priority tickets due today
                    <i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="">
                      Schedule meeting for next week
                    <i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="">
                      Project review
                    <i class="input-helper"></i></label>
                  </div>
                  <i class="remove ti-close"></i>
                </li>
              </ul>
            </div>
            <h4 class="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary me-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p class="text-gray mb-0">The total number of sessions</p>
            </div>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary me-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p class="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
          <!-- To do section tab ends -->
          <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div class="d-flex align-items-center justify-content-between border-bottom">
              <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
            </div>
            <ul class="chat-list">
              <li class="list active">
                <div class="profile"><img src="" alt="image"><span class="online"></span></div>
                <div class="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">19 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="" alt="image"><span class="offline"></span></div>
                <div class="info">
                  <div class="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                <small class="text-muted my-auto">23 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="" alt="image"><span class="online"></span></div>
                <div class="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">14 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="" alt="image"><span class="offline"></span></div>
                <div class="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small class="text-muted my-auto">2 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="" alt="image"><span class="online"></span></div>
                <div class="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">5 min</small>
              </li>
              <li class="list">
                <div class="profile"><img src="" alt="image"><span class="online"></span></div>
                <div class="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small class="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
          <!-- chat tab ends -->
        </div>
      </div>
      <!-- partial -->
<!---------------------------------------------------------------------------------------------------------------------->
<!----SideBar End----------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------------------------------------------------------------------------------->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="../../index.html">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item nav-category">UI Elements</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">UI Elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/ui-features/dropdowns.html">Dropdowns</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/ui-features/typography.html">Typography</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">정보 서비스</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i class="menu-icon mdi mdi-anchor"></i>
              <span class="menu-title">세계 항만 정보</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/forms/basic_elements.html">세계 항만정보</a>
                </li>
                  <li class="nav-item">
                  <a class="nav-link" href="../../pages/ui-features/typography.html">Typography</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="menu-icon mdi mdi-chart-line"></i>
              <span class="menu-title">Charts</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/charts/chartjs.html">ChartJs</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="menu-icon mdi mdi-table"></i>
              <span class="menu-title">Tables</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/tables/basic-table.html">Basic table</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i class="menu-icon mdi mdi-layers-outline"></i>
              <span class="menu-title">Icons</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="icons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/icons/mdi.html">Mdi icons</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">pages</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="menu-icon mdi mdi-account-circle-outline"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/samples/login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">help</li>
          <li class="nav-item">
            <a class="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
              <i class="menu-icon mdi mdi-file-document"></i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
<!---------------------------------------------------------------------------------------------------------------------->
<!----SideBar End----------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div id="mapContainer" class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                    <div class="card-title">Ports Map <code>to move port details</code></div>
                  <div id="map" style="width: 100%; height: 380px;"></div>
                
                  </div>
                </div>
            </div>

<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
              
       <div class="row">
        <div class="col-sm-6 grid-margin stretch-card">
            <div class="card">
      <div class="card-body">
           <h4 class="card-title">컨테이너선 정박 數</h4>
        <canvas id="portChart"></canvas>
      </div>
    </div>
  </div>
            <div class="col-sm-6 grid-margin stretch-card">
                <div class="card">
      <div class="card-body">
        <h4 class="card-title">선박別 출도착</h4>
        <canvas id="containerChart"></canvas>
      </div>
    </div>
  </div>
           
  <div class="col-sm-3 grid-margin stretch-card mb-1">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Doughnut chart</h4>
        <canvas id="scatterChart"></canvas>
      </div>
    </div>
  </div>
  <div class="col-sm-3 grid-margin stretch-card mb-1">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Line chart</h4>
        <canvas id="containerChart"></canvas>
      </div>
    </div>
  </div>
</div>

<!------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------>
<!----------------스케줄 테이블------------------------------------------------------------------------------------------->            
 <!------------------------------------------------------------------------------------------------------------------------------>              
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">스케줄 정보</h4>
                  <p class="card-description">
                  </p>
                  <div class="table-responsive">
                    <table id="scheduleTable" class="table table-striped" style="width:100%">
                      <thead>
                        <tr>
                           <th>Vessel</th>
                            <th>ATD</th>
                            <th>ETA</th>
                            <th>Delay</th>
                            <th>Next POD</th>
                            <th>TEU</th>
                            <th>Liner</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                      </thead>
                        <tbody>
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Inverse table</h4>
                  <p class="card-description">
                    Add class <code>.table-dark</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-dark">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First name</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Herman Beck</td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                          <tr>
                          <td>2</td>
                          <td>Messsy Adam</td>
                          <td>$245.30</td>
                          <td>July 1, 2015</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            John Richards
                          </td>
                          <td>
                            $138.00
                          </td>
                          <td>
                            Apr 12, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4
                          </td>
                          <td>
                            Peter Meggik
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            5
                          </td>
                          <td>
                            Edward
                          </td>
                          <td>
                            $ 160.25
                          </td>
                          <td>
                            May 03, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            6
                          </td>
                          <td>
                            John Doe
                          </td>
                          <td>
                            $ 123.21
                          </td>
                          <td>
                            April 05, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            7
                          </td>
                          <td>
                            Henry Tom
                          </td>
                          <td>
                            $ 150.00
                          </td>
                          <td>
                            June 16, 2015
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Table with contextual classes</h4>
                  <p class="card-description">
                    Add class <code>.table-{color}</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            #
                          </th>
                          <th>
                            First name
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Amount
                          </th>
                          <th>
                            Deadline
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-info">
                          <td>
                            1
                          </td>
                          <td>
                            Herman Beck
                          </td>
                          <td>
                            Photoshop
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                        </tr>
                        <tr class="table-warning">
                          <td>
                            2
                          </td>
                          <td>
                            Messsy Adam
                          </td>
                          <td>
                            Flash
                          </td>
                          <td>
                            $245.30
                          </td>
                          <td>
                            July 1, 2015
                          </td>
                        </tr>
                        <tr class="table-danger">
                          <td>
                            3
                          </td>
                          <td>
                            John Richards
                          </td>
                          <td>
                            Premeire
                          </td>
                          <td>
                            $138.00
                          </td>
                          <td>
                            Apr 12, 2015
                          </td>
                        </tr>
                        <tr class="table-success">
                          <td>
                            4
                          </td>
                          <td>
                            Peter Meggik
                          </td>
                          <td>
                            After effects
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                        </tr>
                        <tr class="table-primary">
                          <td>
                            5
                          </td>
                          <td>
                            Edward
                          </td>
                          <td>
                            Illustrator
                          </td>
                          <td>
                            $ 160.25
                          </td>
                          <td>
                            May 03, 2015
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:/partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  <!-- plugins:js -->
  <!-- plugins:js -->
  <script src="/js/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page -->
  <script src="/chart.js/Chart.min.js" ></script>
  <script src="/bootstrap-datepicker/bootstrap-datepicker.min.js" ></script>
  <!-- End plugin js for this page -->
  <!-- inject:js -->
  <script src="/jss/off-canvas.js" ></script>
  <script src="/jss/hoverable-collapse.js" ></script>
  <script src="/jss/template.js" ></script>
  <script src="/jss/settings.js" ></script>
  <script src="/jss/todolist.js" ></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="/jss/chart.js" ></script>
  <!-- End custom js for this page-->




<script>
var startLat = 44;
var startLon = 12;
var startZoom = 1.4;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FycmllLXhpYSIsImEiOiJja3Z0NDVtMzczZWpnMm9tdG92eHgxZXo5In0.DQ9J_C1Np1kl0Slf4EVoMA';

class ResetControl {
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this.button = document.createElement('button');
        this.button.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-reset';
        this.button.textContent = 'R';
        this.container.appendChild(this.button);
        this.button.addEventListener('click', () => this.reset());
        return this.container;
    }

    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }

    reset() {
        this.map.flyTo({
            center: [startLon, startLat],
            zoom: startZoom
        });
    }
}
    
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
    center: [44, 12],
  zoom: 1.3
});
    
    const resetControl = new ResetControl();
map.addControl(resetControl, 'top-right');


// Assuming you have a ports.csv file in the same directory
    fetch('/api/vessel')
        .then((response) => response.json())
        .then((portsData) => {
         // Create a GeoJSON FeatureCollection from your port data
            portsData.forEach((port) => {
                const lat = parseFloat(port.lat);
                const lon = parseFloat(port.lon);


                // Create a marker for each port
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = 'url(icons/port.png)';
                
                // Add event listeners for marker enter and leave events
                el.addEventListener('mouseenter', () => el.style.backgroundImage = 'url(icons/port-selected.png)');
                el.addEventListener('mouseleave', () => el.style.backgroundImage = 'url(icons/port.png)');
                
                 var marker = new mapboxgl.Marker(el)
                    .setLngLat([lon, lat])
                    .addTo(map);

                var popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h5>${port.port}</h5><p>${port.country}</p>`);
                marker.setPopup(popup);

                // Show the popup on mouseenter
                el.addEventListener('mouseenter', () => marker.togglePopup());

                // Hide the popup on mouseleave
                el.addEventListener('mouseleave', () => marker.togglePopup());
                
                      // Fly to the clicked port and load new data
                el.addEventListener('click', () => {
                    map.flyTo({center: [lon, lat], zoom: 8});
                    
                
                    
    let portInfoUrl = `https://www.econdb.com/maritime/ports/async/${port.locode}`;
    populatePortInfo(portInfoUrl);
    let portInVesselUrl = `https://www.econdb.com/widgets/ships-in-port/data/?freq=week&locode=${port.locode}`;
    let arriveDepartUrl = `https://www.econdb.com/widgets/port-time-series/data/?type=arrivals&unit=number&freq=week&locode=${port.locode}`;
    let containerTradeUrl = `https://www.econdb.com/widgets/sea-trade-by-week/data/?freq=week&locode=${port.locode}`;
    
    Promise.all([
      fetch(portInfoUrl).then(res => res.json()),
      fetch(portInVesselUrl).then(res => res.json()),
      fetch(arriveDepartUrl).then(res => res.json()),
      fetch(containerTradeUrl).then(res => res.json())
    ]).then(([portInfo, portInVessel, arriveDepart, containerTrade]) => {
      // You now have all the data from the four URLs
      // You can use them to add additional markers or data to your map
      // For example, let's just log the data for now:
      console.log(portInfo, portInVessel, arriveDepart, containerTrade);
    }).catch(err => {
      // handle error here
      console.error("An error occurred while fetching data: ", err);
    });
                
    fetchportInVesselData(portInVesselUrl);
    fetchContainerTradeData(arriveDepartUrl);
    fetchContainerTradeData(containerTradeUrl);
                    
        fetch(port.vessel_map)
            .then(response => response.json())
            .then(vesselData => {
                // Add new markers for the vessel data
                // Assuming vesselData is in the same format as portsData
                vesselData.forEach((vessel) => {
                    const vesselLat = parseFloat(vessel.lat);
                    const vesselLon = parseFloat(vessel.lon);
                       // Create a marker for each vessel
                    const vesselEl = document.createElement('div');
                      vesselEl.className = 'marker';
                    vesselEl.style.backgroundImage = 'url(icons/nav-arrow.png)';

                    // Add event listeners for marker enter and leave events
                    vesselEl.addEventListener('mouseenter', () => vesselEl.style.backgroundImage = 'url(icons/nav-arrow-hovered.png)');
                    vesselEl.addEventListener('mouseleave', () => vesselEl.style.backgroundImage = 'url(icons/nav-arrow.png)');

                    // Create a marker using the HTML element and add it to the map
                    var vesselMarker = new mapboxgl.Marker(vesselEl)
                        .setLngLat([vesselLon, vesselLat])
                        .addTo(map);

                    // Create a popup for the marker and add it to the marker
                    var vesselPopup = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`<h3>${vessel.name}</h3><p>${vessel.type}</p>`);
                    vesselMarker.setPopup(vesselPopup);

                    // Show the popup on mouseenter
                    vesselEl.addEventListener('mouseenter', () => vesselMarker.togglePopup());

                    // Hide the popup on mouseleave
                    vesselEl.addEventListener('mouseleave', () => vesselMarker.togglePopup());



                });
            })
            .catch(error => console.error('Error:', error));
                });
            });
        })
        .catch((error) => console.error('Error:', error));
    
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());

</script>
<script>
   // Flag to keep track of the container's current size
    let isSmall = false;

    // Listen for a click event on the button
    $('#resizeButton').click(function() {
        if (isSmall) {
            // If the container is currently small, make it large
            $('#mapContainer').removeClass('col-lg-6').addClass('col-lg-12');
            isSmall = false;
        } else {
            // If the container is currently large, make it small
            $('#mapContainer').removeClass('col-lg-12').addClass('col-lg-6');
            isSmall = true;
        }
    });
</script>

  



</body>
</html>