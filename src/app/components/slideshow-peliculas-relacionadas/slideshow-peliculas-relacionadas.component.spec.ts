import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowPeliculasRelacionadasComponent } from './slideshow-peliculas-relacionadas.component';

describe('SlideshowPeliculasRelacionadasComponent', () => {
  let component: SlideshowPeliculasRelacionadasComponent;
  let fixture: ComponentFixture<SlideshowPeliculasRelacionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideshowPeliculasRelacionadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideshowPeliculasRelacionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
