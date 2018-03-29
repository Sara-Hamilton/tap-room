import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKegComponent } from './delete-keg.component';

describe('DeleteKegComponent', () => {
  let component: DeleteKegComponent;
  let fixture: ComponentFixture<DeleteKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
