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
const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path:'header', component:HeaderComponent},
    {path: 'announcement', component:CordinatorAnnaucementComponent},
    {path: 'reports', component:ReportsComponent},
    {path: 'view-supervisor', component:ViewSupervisorComponent},
    {path: 'project-archive', component:ProjectArchiveComponent},
    {path: 'send-message', component:SendMessageComponent},
    {path: 'view-concept-note', component:ViewConceptNoteComponent},
    {path: 'system-control', component:SystemControlComponent},
    {path: 'view-groups', component:ViewGroupsComponent},
    {path: 'cordinator-profile', component:CordinatorProfileComponent},
    {path: 'assign-group', component:AssignGroupComponent},
    {path: 'post-announcement', component:PostAnnouncementComponent},
    {path: 'supervisor-group', component:MygroupComponent},
    {path: 'panel', component:PanelComponent},
    {path: 'received-concept', component:ReceivedConceptComponent},
    {path: 'std-messages', component:StdMessagesComponent},
    {path: 'submitted-report', component:SubmittedReportComponent},
    {path: 'supervisor-profile',component:SupervisorProfileComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);