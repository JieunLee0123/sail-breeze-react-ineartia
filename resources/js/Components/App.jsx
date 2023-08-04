import React from "react"
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';

const el = document.getElementById('app');

const App = () => {
  return (<div>Laravel Jetstream with React</div>);
}

export default App

if (el) {
  render(<App />, el);
}