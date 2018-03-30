import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-supervisor-left',
  template: `
  <!-- Left Sidebar -->
  <aside id="leftsidebar" class="sidebar">
      <!-- User Info -->
      <div class="user-info">
          <div class="image">
              <img src="./assets/images/user.png" width="48" height="48" alt="User" />
          </div>
          <div class="info-container">
              <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
              <div class="email">john.doe@example.com</div>
              <div class="btn-group user-helper-dropdown">
                  <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                  <ul class="dropdown-menu pull-right">
                      <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                      <li role="seperator" class="divider"></li>
                      
                      <li><a href="javascript:void(0);"><i class="material-icons">input</i>Sign Out</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <!-- #User Info -->
      <!-- Menu -->
      <div class="menu">
          <ul class="list">
              <li class="header">MY OPTIONS</li>
           
              <li class="active">
                  <a href="/supervisor">
                      <i class="material-icons">featured_play_list</i>
                      <span>My Group</span>
                  </a>
              </li>
              <li class="active">
                  <a href="/panel">
                      <i class="material-icons">view_list</i>
                      <span>panel</span>
                  </a>
              </li>
              <li class="active">
                  <a href="/received-concept">
                      <i class="material-icons">view_week</i>
                      <span>Received Concept Note</span>
                  </a>
              </li>
              <li class="active">
                  <a href="/submitted-report">
                      <i class="material-icons">archive</i>
                      <span>Submitted Report</span>
                  </a>
              </li>
              <li class="active">
                <a href="../../pages/helper-classes.html">
                    <i class="material-icons">person</i>
                    <span>Profile</span>
                </a>
            </li>    
          </ul>
      </div>
      <!-- #Menu -->
      <!-- Footer -->
      <div class="legal">
          <div class="copyright">
              &copy;2018 <a href="javascript:void(0);">UDSM -FYP MANAGEMENT  </a>.
          </div>
          <div class="version">
              <b>Version: </b> 1
          </div>
      </div>
      <!-- #Footer -->
  </aside>
  <!-- #END# Left Sidebar -->
  <!-- Right Sidebar -->
  <aside id="rightsidebar" class="right-sidebar">
      <ul class="nav nav-tabs tab-nav-right" role="tablist">
          <li role="presentation" class="active"><a href="#skins" data-toggle="tab">SKINS</a></li>
          
      </ul>
      <div class="tab-content">
          <div role="tabpanel" class="tab-pane fade in active in active" id="skins">
              <ul class="demo-choose-skin">
                  <li data-theme="red" class="active">
                      <div class="red"></div>
                      <span>Red</span>
                  </li>
                  <li data-theme="pink">
                      <div class="pink"></div>
                      <span>Pink</span>
                  </li>
                  <li data-theme="purple">
                      <div class="purple"></div>
                      <span>Purple</span>
                  </li>
                  <li data-theme="deep-purple">
                      <div class="deep-purple"></div>
                      <span>Deep Purple</span>
                  </li>
                  <li data-theme="indigo">
                      <div class="indigo"></div>
                      <span>Indigo</span>
                  </li>
                  <li data-theme="blue">
                      <div class="blue"></div>
                      <span>Blue</span>
                  </li>
                  <li data-theme="light-blue">
                      <div class="light-blue"></div>
                      <span>Light Blue</span>
                  </li>
                  <li data-theme="cyan">
                      <div class="cyan"></div>
                      <span>Cyan</span>
                  </li>
                  <li data-theme="teal">
                      <div class="teal"></div>
                      <span>Teal</span>
                  </li>
                  <li data-theme="green">
                      <div class="green"></div>
                      <span>Green</span>
                  </li>
                  <li data-theme="light-green">
                      <div class="light-green"></div>
                      <span>Light Green</span>
                  </li>
                  <li data-theme="lime">
                      <div class="lime"></div>
                      <span>Lime</span>
                  </li>
                  <li data-theme="yellow">
                      <div class="yellow"></div>
                      <span>Yellow</span>
                  </li>
                  <li data-theme="amber">
                      <div class="amber"></div>
                      <span>Amber</span>
                  </li>
                  <li data-theme="orange">
                      <div class="orange"></div>
                      <span>Orange</span>
                  </li>
                  <li data-theme="deep-orange">
                      <div class="deep-orange"></div>
                      <span>Deep Orange</span>
                  </li>
                  <li data-theme="brown">
                      <div class="brown"></div>
                      <span>Brown</span>
                  </li>
                  <li data-theme="grey">
                      <div class="grey"></div>
                      <span>Grey</span>
                  </li>
                  <li data-theme="blue-grey">
                      <div class="blue-grey"></div>
                      <span>Blue Grey</span>
                  </li>
                  <li data-theme="black">
                      <div class="black"></div>
                      <span>Black</span>
                  </li>
              </ul>
          </div>
          
      </div>
  </aside>
  <!-- #END# Right Sidebar -->
  `,
  styles: []
})
export class SupervisorLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

}
