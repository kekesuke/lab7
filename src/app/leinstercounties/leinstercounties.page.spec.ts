import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeinstercountiesPage } from './leinstercounties.page';

describe('LeinstercountiesPage', () => {
  let component: LeinstercountiesPage;
  let fixture: ComponentFixture<LeinstercountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeinstercountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeinstercountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
