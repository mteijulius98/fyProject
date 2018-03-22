import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HeaderComponent } from './Layout/header.component';
import { LeftComponent } from './Layout/left.component';
import { ButtomComponent } from './Layout/buttom.component';
import { CordinatorAnnaucementComponent } from './student/cordinator-annaucement.component';
import { routing } from './router.component';
import { ReportsComponent } from './student/reports.component';
import { ViewSupervisorComponent } from './student/view-supervisor.component';
import { ProjectArchiveComponent } from './student/project-archive.component';
import { SendMessageComponent } from './student/send-message.component';
import { ViewConceptNoteComponent } from './cordinator/view-concept-note.component';
import { SystemControlComponent } from './cordinator/system-control.component';
import { ViewGroupsComponent } from './cordinator/view-groups.component';
import { CordinatorProfileComponent } from './cordinator/cordinator-profile.component';
import { AssignGroupComponent } from './cordinator/assign-group.component';
import { PostAnnouncementComponent } from './cordinator/post-announcement.component';
import { MygroupComponent } from './supervisor/mygroup.component';
import { PanelComponent } from './supervisor/panel.component';
import { ReceivedConceptComponent } from './supervisor/received-concept.component';
import { StdMessagesComponent } from './supervisor/std-messages.component';
import { SubmittedReportComponent } from './supervisor/submitted-report.component';
import { SupervisorProfileComponent } from './supervisor/supervisor-profile.component';
import { CordinatorHeaderComponent } from './cordinator/cordinator-header.component';
import { CordinatorLeftComponent } from './cordinator/cordinator-left.component';
import { SupervisorHeaderComponent } from './supervisor/supervisor-header.component';
import { SupervisorLeftComponent } from './supervisor/supervisor-left.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

import { HttpModule } from '@angular/http';
import { ForgetPasswordComponent } from './forget-password.component';
import { RouterModule } from '@angular/router';
import { StudentServiceService } from './student/student-service.service';
import { ConteptNoteSubmissionComponent } from './student/contept-note-submission.component';
import { StudentProfileComponent } from './student/student-profile.component';
import{DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LeftComponent,
    ButtomComponent,
    CordinatorAnnaucementComponent,
    ReportsComponent,
    ViewSupervisorComponent,
    ProjectArchiveComponent,
    SendMessageComponent,
    ViewConceptNoteComponent,
    SystemControlComponent,
    ViewGroupsComponent,
    CordinatorProfileComponent,
    AssignGroupComponent,
    PostAnnouncementComponent,
    MygroupComponent,
    PanelComponent,
    ReceivedConceptComponent,
    StdMessagesComponent,
    SubmittedReportComponent,
    SupervisorProfileComponent,
    CordinatorHeaderComponent,
    CordinatorLeftComponent,
    SupervisorHeaderComponent,
    SupervisorLeftComponent,
    ForgetPasswordComponent,
    ConteptNoteSubmissionComponent,
    StudentProfileComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    RouterModule,
    DataTablesModule
    
  ],
  providers: [
    LoginServiceService,
    StudentServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
