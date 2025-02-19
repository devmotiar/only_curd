import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
   
            {path:'',redirectTo:'post/index', pathMatch:'full'},
            // {path:'',component:LayoutComponent},
            {path:'post/index',component:IndexComponent},
            {path:'post/create',component:CreateComponent},
            {path:'post/:postId/edit',component:EditComponent},
            {path:'post/:postId/view',component:ViewComponent}
    
];
