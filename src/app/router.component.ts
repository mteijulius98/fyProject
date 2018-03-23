import{ Routes,RouterModule } from "@angular/router";
import{ HeaderComponent} from "./Layout/header.component";
import { LoginComponent } from "./login.component";
import { ModuleWithProviders } from "@angular/core";
import { LeftComponent } from "./Layout/left.component";
import { CordinatorAnnaucementComponent } from "./student/cordinator-annaucement.component";
import { ReportsComponent } from "./student/reports.component";
import { ViewSupervisorComponent } from "./student/view-supervisor.component";
import { ProjectArchiveComponent } from "./student/project-archive.component";
import { SendMessageComponent } from "./student/send-message.component";
import { ViewConceptNoteComponent } from "./cordinator/view-concept-note.component";
import { SystemControlComponent } from "./cordinator/system-control.component";
import { ViewGroupsComponent } from "./cordinator/view-groups.component";
import { CordinatorProfileComponent } from "./cordinator/cordinator-profile.component";
import { AssignGroupComponent } from "./cordinator/assign-group.component";
import { PostAnnouncementComponent } from "./cordinator/post-announcement.component";
import { MygroupComponent } from "./supervisor/mygroup.component";
import { PanelComponent } from "./supervisor/panel.component";
import { ReceivedConceptComponent } from "./supervisor/received-concept.component";
import { StdMessagesComponent } from "./supervisor/std-messages.component";
import { SubmittedReportComponent } from "./supervisor/submitted-report.component";
import { SupervisorProfileComponent } from "./supervisor/supervisor-profile.component";
import { ForgetPasswordComponent } from "./forget-password.component";
import { ConteptNoteSubmissionComponent } from "./student/contept-note-submission.component";
import { StudentProfileComponent } from "./student/student-profile.component";
import { AuthGuard } from "./auth.guard";
const APP_ROUTES: Routes = [
   // {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: '',  component: LoginComponent},
    {path: 'forgetpassword', component:ForgetPasswordComponent},
    {path: 'student-profile', component:StudentProfileComponent, canActivate: [AuthGuard]},
    //For students
    {path: 'student', component:CordinatorAnnaucementComponent, canActivate: [AuthGuard]},
    {path: 'reports', component:ReportsComponent, canActivate: [AuthGuard]},
    {path: 'view-supervisor', component:ViewSupervisorComponent, canActivate: [AuthGuard]},
    {path: 'project-archive', component:ProjectArchiveComponent,canActivate: [AuthGuard]},
    {path: 'send-message', component:SendMessageComponent,canActivate: [AuthGuard]},
    {path: 'conceptnote', component:ConteptNoteSubmissionComponent,canActivate: [AuthGuard]},
    {path: 'std-profile', component:StudentProfileComponent,canActivate: [AuthGuard]},
    //End Student
    //For cordinator
    {path: 'view-concept-note', component:ViewConceptNoteComponent},
    {path: 'system-control', component:SystemControlComponent},
    {path: 'view-groups', component:ViewGroupsComponent},
    {path: 'cordinator-profile', component:CordinatorProfileComponent},
    {path: 'assign-group', component:AssignGroupComponent},
    {path: 'post-announcement', component:PostAnnouncementComponent},
    //End cordinator
    //For Supervisor
    {path: 'supervisor-group', component:MygroupComponent},
    {path: 'panel', component:PanelComponent},
    {path: 'received-concept', component:ReceivedConceptComponent},
    {path: 'std-messages', component:StdMessagesComponent},
    {path: 'submitted-report', component:SubmittedReportComponent},
    {path: 'supervisor-profile',component:SupervisorProfileComponent}
    //End Supervisor
   
    
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);