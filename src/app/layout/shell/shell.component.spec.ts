import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  });

  it('should have a main content area (router-outlet)', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should have a sidebar element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('aside')).toBeTruthy(); // Assuming sidebar is an <aside>
  });
});
