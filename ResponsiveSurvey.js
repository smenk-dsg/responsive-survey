import {Templates} from 'formiojs';

Templates.framework = 'bootstrap'; // or whatever framework you want to use.

// Then you can override specific templates with:
Templates.current = {
  survey: {
    form: `<h1>test</h1>`
  }
}
