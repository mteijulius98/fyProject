import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cordinator-header',
  template: `
  <nav class="navbar">
  <div class="container-fluid">
      <div class="navbar-header">
          <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
          <a href="javascript:void(0);" class="bars"></a>
          <a class="navbar-brand" href="../../index.html">FYP MANAGEMENT SYSTEM</a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
              
              <!-- Notifications -->
              <li class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                      <i class="material-icons">notifications</i>
                      <span class="label-count">7</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li class="header">NOTIFICATIONS</li>
                      <li class="body">
                          <ul class="menu">
                              <li>
                                  <a href="javascript:void(0);">
                                      <div class="icon-circle bg-blue-grey">
                                          <i class="material-icons">comment</i>
                                      </div>
                                      <div class="menu-info">
                                          <h4><b>John</b> commented your post</h4>
                                          <p>
                                              <i class="material-icons">access_time</i> 4 hours ago
                                          </p>
                                      </div>
                                  </a>
                              </li>
                              
                          </ul>
                      </li>
                      <li class="footer">
                          <a href="javascript:void(0);">View All Notifications</a>
                      </li>
                  </ul>
              </li>
              <!-- #END# Notifications -->
              <!-- Tasks -->
              <li class="dropdown">
                  <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                      <i class="material-icons">flag</i>
                      <span class="label-count">9</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li class="header">TASKS</li>
                      <li class="body">
                          <ul class="menu tasks">
                              <li>
                                  <a href="javascript:void(0);">
                                      <h4>
                                          Your Fucking Project
                                          <small>50%</small>
                                      </h4>
                                      <div class="progress">
                                          <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 32%">
                                          </div>
                                      </div>
                                  </a>
                              </li>
                                                           
                             
                          </ul>
                      </li>
                      <li class="footer">
                          <a href="javascript:void(0);">View All Tasks</a>
                      </li>
                  </ul>
              </li>
              <!-- #END# Tasks -->
              <li class="pull-right"><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="material-icons">more_vert</i></a></li>
          </ul>
      </div>
  </div>
</nav>
<!-- #Top Bar -->
  
  `,
  styles: []
})
export class CordinatorHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
