import { NgModule } from "@angular/core";
import { RouterModule, Routes, Route } from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { FarmersMarketsComponent } from "./farmers-markets/farmers-markets.component";
import { foodGroupsRoutes } from "./food-groups/food-groups.routing";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

const fallbackRoute: Route = {
    path: '**', component: DefaultComponent
}

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: DefaultComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'farmersMarkets', component: FarmersMarketsComponent},
            {path: 'myPlate', component: PlateComponent},
            {path: 'exercises', component: ExercisesComponent},
            ...foodGroupsRoutes, 
            fallbackRoute
        ]
    }   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};