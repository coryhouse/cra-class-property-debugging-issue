This project shows a bug in create-react-app. You can't debug class properties. The this keyword displays as undefined. If you bind in the constuctor instead, then debugging works fine. Seems the root cause is webpack's cheap-module-source-map devtool doesn't support it.

<a href="https://www.dropbox.com/s/6zfiqfzl1ezgqgg/Screenshot%202018-09-02%2013.18.01.png?dl=0">Here's an image of the issue</a>.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
