<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="whatToDoApp">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>WebSocket Client</title>
		<!--
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/css/bootstrap.min.css">
	-->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/css/bootstrap.css">
</head>
<body>
	<!-- Static navbar -->
	<div class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="/test">What ToDo ?</a>
			</div>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="mailto:oskmkr@naver.com">Contact</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Nav header</li>
							<li><a href="#">Separated link</a></li>
							<li><a href="#">One more separated link</a></li>
						</ul>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="../navbar/">Default</a></li>
					<li class="active"><a href="./">Static top</a></li>
					<li><a href="../navbar-fixed-top/">Fixed top</a></li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
	</div>

	<hr><hr>
	<div class="container" ng-controller="ContentController">
		<div class="row">
			<div class="col-lg-6">
				<div class="input-group">
					<input type="text" class="form-control _input-field">
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" ng-click="add()">Add</button>
					</span>
				</div><!-- /input-group -->
			</div><!-- /.col-lg-6 -->
		</div><!-- /.row -->
        <hr>
		<div class="row" ng-repeat="content in todos track by $index" ng-model="todos" ng-change="test()">
			<div class="col-lg-6">
				<div class="input-group">
					<span class="input-group-addon">
						<input type="checkbox" ng-model="todos[$index].done">
					</span>
					<input type="text" class="form-control" value="{{content.subject}}" ng-model="todos[$index].subject" ng-blur="update()">
					<span class="input-group-btn">
                        <button class="btn btn-default" type="button" ng-click="remove($index)">Del</button>
                    </span>
				</div><!-- /input-group -->
			</div><!-- /.col-lg-6 --> 
		</div>
		<hr>
		<div id="footer">
			<div class="container">
				<p class="text-muted credit">이 앱은 <a href="http://martinbean.co.uk">bootstrap</a> 을 이용해 개발 되었습니다.</p>
			</div>
		</div>
	</div>


<script src="//code.jquery.com/jquery-1.11.0.js"></script>
<!--
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/js/bootstrap.min.js"></script>
-->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/js/bootstrap.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.js"></script>
<script src="/resources/js/keyword.js"></script>
</body>
</html>
