import { Component, OnInit } from '@angular/core';
import { GrantsService } from '../grants.service';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants;
  grant: any;

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {
      this.searchGrants();
  }

  private searchGrants() {
    this.grantsService.getGrants().then(x => this.grants = x);
  }

  search(alumnFilter) {
    this.grants = this.grants
      .filter(x =>
        x.alumn.toLowerCase().includes(alumnFilter.value.toLowerCase())
      );
    return false;
  }

  edit(grant) {
    this.grant = grant;
  }

  delete(grant) {
    this.grantsService.delete(grant.id);
  }
}
