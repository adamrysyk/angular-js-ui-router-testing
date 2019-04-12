var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {

	var homeState = {
    name: 'home',
    url: '/',
    views: {
        'main@': {
            template: ''
        }
    }
  }

  var helloState = {
    name: 'hello',
    url: '/hello',
    views: {
        'main@': {
        	controller: ['helloData', function(helloData) {
        		console.log(helloData);
    		}],
            template: 
            	`<h3>hello world!</h3>
            	<a ui-sref="helloChild1" ui-sref-active="active">
            		Hello 1
        		</a>
        		<a ui-sref="helloChild2" ui-sref-active="active">
            		Hello 2
        		</a>
        		<a ui-sref="helloChild3" ui-sref-active="active">
            		Hello 2
        		</a>
        		<ui-view name="helloChild1"></ui-view>
        		<ui-view name="helloChild2"></ui-view>
        		<ui-view name="helloChild3"></ui-view>`
        }
    },
    resolve: {
    	helloData: [function() {
    		return 'hello data'
    	}]
    }
  }

  var helloChildState1 = {
  	name: 'helloChild1',
  	parent: 'hello',
  	url: '/child1',
  	views: {
        'main.helloChild1@': {
        	controller: ['helloChild1Data', function(helloChild1Data) {
        		console.log(helloChild1Data);
    		}],
            template: '<h4>hello world child1!</h4>'
        }
    },
    resolve: {
    	helloChild1Data: [function() {
    		return 'hello child data1'
    	}]
    }
  }

  var helloChildState2 = {
  	name: 'helloChild2',
  	parent: 'hello',
  	url: '/child2',
  	views: {
        'main.helloChild2@': {
        	controller: ['helloChild2Data', function(helloChild2Data) {
        		console.log(helloChild2Data);
    		}],
            template: '<h4>hello world child2!</h4>'
        }
    },
    resolve: {
    	helloChild2Data: [function() {
    		return 'hello child data2'
    	}]
    }
  }

  var helloChildState3 = {
  	name: 'helloChild3',
  	parent: 'hello',
  	url: '/child3',
  	views: {
        'main.helloChild3@': {
        	controller: ['helloChild3Data', function(helloChild3Data) {
        		console.log(helloChild3Data);
    		}],
            template: '<h4>hello world child3!</h4>'
        }
    },
    resolve: {
    	helloChild3Data: [function() {
    		return 'hello child data3'
    	}]
    }
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    views: {
        'main@': {
        	controller: ['aboutData', function(aboutData) {
        		console.log(aboutData);
    		}],
            template: `
            	<h3>Its the UI-Router hello world app!</h3>
        		<a ui-sref="aboutChild1" ui-sref-active="active">
            		About 1
        		</a>
        		<a ui-sref="aboutChild2" ui-sref-active="active">
            		About 2
        		</a>
        		<a ui-sref="aboutChild3" ui-sref-active="active">
            		About 2
        		</a>
        		<ui-view name="aboutChild"></ui-view>
    		`
        }
    },
    resolve: {
    	aboutData: [function() {
    		return 'about data'
    	}]
    }
  }

  var aboutChildState1 = {
    name: 'aboutChild1',
  	parent: 'about',
    url: '/child1',
    views: {
        'main.aboutChild@': {
        	controller: ['aboutChildData1', function(aboutChildData1) {
        		console.log(aboutChildData1);
    		}],
            template: '<h3>about child1</h3>'
        }
    },
    resolve: {
    	aboutChildData1: [function() {
    		return 'about child data1'
    	}]
    }
  }

  var aboutChildState2 = {
    name: 'aboutChild2',
  	parent: 'about',
    url: '/child2',
    views: {
        'main.aboutChild@': {
        	controller: ['aboutChildData2', function(aboutChildData2) {
        		console.log(aboutChildData2);
    		}],
            template: '<h3>about child 2</h3>'
        }
    },
    resolve: {
    	aboutChildData2: [function() {
    		return 'about child data2'
    	}]
    }
  }

  var aboutChildState3 = {
    name: 'aboutChild3',
  	parent: 'about',
    url: '/child3',
    views: {
        'main.aboutChild@': {
        	controller: ['aboutChildData3', function(aboutChildData3) {
        		console.log(aboutChildData3);
    		}],
            template: '<h3>about child 3</h3>'
        }
    },
    resolve: {
    	aboutChildData3: [function() {
    		return 'about child data3'
    	}]
    }
  }

  var faqState = {
    name: 'faq',
    url: '/faq',
    views: {
        'main@': {
        	controller: ['$scope', '$stateParams', 'faqData', function($scope, $stateParams, faqData) {
        		console.log(faqData);

        		if ($stateParams.hideHeader) {
        			$scope.hideHeader = true;
        		}
        		$scope.text = 'text'
    		}],
            template: 
            	`<h3 ng-if="!hideHeader">FAQs</h3>
            	<h5 ng-bind="text"></h5>
            	<a ui-sref="faqChild" ui-sref-active="active">
            		View FAQs
        		</a>
        		<ui-view name="faqChild1"></ui-view>
        		<ui-view name="faqChild2"></ui-view>
        		<ui-view name="faqChild3"></ui-view>`
        }
    },
    resolve: {
    	faqData: [function() {
    		return 'faq data'
    	}]
    }
  }

  var faqChildState = {
    name: 'faqChild',
  	parent: 'faq',
    url: '/child?hideHeader',
    views: {
        'main.faqChild1@': {
        	controller: ['faqChildData1', function(faqChildData1) {
        		console.log(faqChildData1);
    		}],
            template: '<h3>faq child 1</h3>'
        },
        'main.faqChild2@': {
        	controller: ['faqChildData2', function(faqChildData2) {
        		console.log(faqChildData2);
    		}],
            template: '<h3>faq child 2</h3>'
        },
        'main.faqChild3@': {
        	controller: ['faqChildData3', function(faqChildData3) {
        		console.log(faqChildData3);
    		}],
            template: '<h3>faq child 3</h3>'
        }
    },
    resolve: {
    	faqChildData1: [function() {
    		return 'faq child data1'
    	}],
    	faqChildData2: [function() {
    		return 'faq child data2'
    	}],
    	faqChildData3: [function() {
    		return 'faq child data3'
    	}]
    }
  }

  $stateProvider.state(homeState);
  $stateProvider.state(helloState);
  $stateProvider.state(helloChildState1);
  $stateProvider.state(helloChildState2);
  $stateProvider.state(helloChildState3);
  $stateProvider.state(aboutState);
  $stateProvider.state(aboutChildState1);
  $stateProvider.state(aboutChildState2);
  $stateProvider.state(aboutChildState3);
  $stateProvider.state(faqState);
  $stateProvider.state(faqChildState);
});