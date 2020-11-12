import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserList } from "./userList/userList.component";

const components = [UserList];

@NgModule({
  declarations: [...components],
  imports: [FormsModule, CommonModule],
  exports: [...components],
  providers: [],
  bootstrap: [],
})
export class ListsComponentsModule {}
