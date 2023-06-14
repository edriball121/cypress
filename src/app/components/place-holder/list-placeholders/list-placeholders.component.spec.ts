import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaceholdersComponent } from './list-placeholders.component';

describe('ListPlaceholdersComponent', () => {
  let component: ListPlaceholdersComponent;
  let fixture: ComponentFixture<ListPlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlaceholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
