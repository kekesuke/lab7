import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnaughtCountriesPage } from './connaught-countries.page';

describe('ConnaughtCountriesPage', () => {
  let component: ConnaughtCountriesPage;
  let fixture: ComponentFixture<ConnaughtCountriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaughtCountriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnaughtCountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
