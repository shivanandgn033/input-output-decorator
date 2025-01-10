import { Routes } from '@angular/router';
import { InputparentComponent } from './inputproperty/inputparent/inputparent.component';
import { OutputparentComponent } from './outputproperty/outputparent/outputparent.component';

export const routes: Routes = [
    {
        path:'',
        component:InputparentComponent
    },

    {
        path:"inputproperty",
        component:InputparentComponent
    },
    {
        path:"outputproperty",
        component:OutputparentComponent
    }
];
