import { Component, EventEmitter, Output } from "@angular/core";

import { GroupingsComponent as BaseGroupingsComponent } from "jslib-angular/components/groupings.component";
import { CollectionService } from "jslib-common/abstractions/collection.service";
import { FolderService } from "jslib-common/abstractions/folder.service";
import { StateService } from "jslib-common/abstractions/state.service";

@Component({
  selector: "app-vault-groupings",
  templateUrl: "groupings.component.html",
})
export class GroupingsComponent extends BaseGroupingsComponent {
  @Output() onSearchTextChanged = new EventEmitter<string>();

  searchText = "";
  searchPlaceholder: string = null;

  constructor(
    collectionService: CollectionService,
    folderService: FolderService,
    stateService: StateService
  ) {
    super(collectionService, folderService, stateService);
  }

  searchTextChanged() {
    this.onSearchTextChanged.emit(this.searchText);
  }
}
