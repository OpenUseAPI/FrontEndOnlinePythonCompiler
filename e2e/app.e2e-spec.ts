import { PythonRunAnywherePage } from './app.po';

describe('python-run-anywhere App', function() {
  let page: PythonRunAnywherePage;

  beforeEach(() => {
    page = new PythonRunAnywherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
