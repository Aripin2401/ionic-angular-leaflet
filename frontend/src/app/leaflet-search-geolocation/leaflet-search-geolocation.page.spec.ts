import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeafletSearchGeolocationPage } from './leaflet-search-geolocation.page';

describe('LeafletSearchGeolocationPage', () => {
  let component: LeafletSearchGeolocationPage;
  let fixture: ComponentFixture<LeafletSearchGeolocationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletSearchGeolocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeafletSearchGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
