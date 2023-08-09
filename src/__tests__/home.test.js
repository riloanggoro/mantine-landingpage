import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/pages/index';
import { Login } from '@/components/Login';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });
  it('renders a heading', () => {
    render(<Home />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
  it('renders a heading', () => {
    render(<Home />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
  it('renders a pricing', () => {
    render(<Home />);
    expect(screen.getByText('Basic')).toBeInTheDocument();
  });
  it('renders a pricing', () => {
    render(<Home />);
    expect(screen.getByText('Business')).toBeInTheDocument();
  });
  it('renders a pricing', () => {
    render(<Home />);
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('checking id "login"', () => {
    render(<Login />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
