<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Google Plus Bootstrap Theme Demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/css/bootstrap.css">
<!--[if lt IE 9]>
          <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

<link href="resources/css/google-plus.css" rel="stylesheet">
<link href="resources/css/animate.css" rel="stylesheet">
</head>
<body class="">
	<div class="navbar navbar-fixed-top header">
		<div class="col-md-12">
			<div class="navbar-header">
				<a href="#" class="navbar-brand">Keywords</a>
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
					<i class="glyphicon glyphicon-search"></i>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="navbar-collapse1">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="http://usebootstrap.com/theme/google-plus" target="_ext">Bootply+</a></li>
					<li class=""><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-bell"></i></a>
						<ul class="dropdown-menu">
							<li><a href="#"><span class="badge pull-right">40</span>Link</a></li>
							<li><a href="#"><span class="badge pull-right">2</span>Link</a></li>
							<li><a href="#"><span class="badge pull-right">0</span>Link</a></li>
							<li><a href="#"><span class="label label-info pull-right">1</span>Link</a></li>
							<li><a href="#"><span class="badge pull-right">13</span>Link</a></li>
						</ul></li>
					<li><a class="" href="#" id="btnToggle"><i class="glyphicon glyphicon-th-large"></i></a></li>
					<li><a href="#"><i class="glyphicon glyphicon-user"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
	<!--main-->
	<div class="container nosubnav" id="main">
		<div class="row">
			<div class="col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
				<div class="well">
					<form class="form-horizontal" role="form">
						<h4>What's Interesting...</h4>
						<div class="form-group" style="padding: 14px;">
							<textarea class="form-control" placeholder="Just type your thinking..."></textarea>
						</div>
						<button class="btn btn-primary pull-right" type="button">Post</button>
						<ul class="list-inline">
							<li><a href="#"><i class="glyphicon glyphicon-picture"></i></a></li>
						</ul>
					</form>
				</div>

				<%-- keyword card template --%>
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>Inspiration</h4>
					</div>
					<div class="panel-body">
						<img src="resources/img/150.gif" class="img-circle pull-right"> <a href="#">Articles</a>
						<div class="clearfix"></div>
						<hr>
						<div class="clearfix"></div>
						<img src="resources/img/FFF_003.gif" class="img-responsive img-thumbnail pull-right">
						<p>The more powerful (and 100% fluid) Bootstrap 3 grid now comes in 4 sizes (or "breakpoints"). Tiny (for smartphones), Small (for tablets), Medium (for laptops) and Large (for laptops/desktops).</p>
						<div class="clearfix"></div>
						<hr>
						<div class="clearfix"></div>
						<img src="resources/img/FFF_004.gif" class="img-responsive img-thumbnail pull-left" style="margin-right: 5px;">
						<p>Mobile first" is a responsive Web design practice that prioritizes consideration of smart phones and mobile devices when creating Web pages.</p>


					</div>
				</div>

				<%-- keyword card template 2 --%>
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>Upgrade to Bootstrap 3</h4>
					</div>
					<div class="panel-body">
						<img src="resources/img/photo.png" class="img-circle pull-right wow pulse animated" data-wow-iteration="3" data-wow-duration="1.2s"> <a href="#">Guidance and Tools</a>
						<div class="clearfix"></div>
						<hr>
						<p>
							Migrating from Bootstrap 2.x to 3 is not a simple matter of swapping out the JS and CSS files. Bootstrap 3 is a major overhaul, and there are a lot of changes from Bootstrap 2.x. <a
								href="http://bootply.com/bootstrap-3-migration-guide" rel="nofollow">This guidance</a> is intended to help 2.x developers transition to 3.
						</p>
						<h5>
							<a href="http://usebootstrap.com/theme/google-plus">More on Upgrading from +Bootply</a>
						</h5>

					</div>
				</div>

				<%-- keyword card template 3 --%>
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>More Templates</h4>
					</div>
					<div class="panel-body">
						<img src="resources/img/150x150.gif" class="img-circle pull-right"> <a href="#">Free @Bootply</a>
						<div class="clearfix"></div>
						There a load of new free Bootstrap 3 ready templates at Bootply. All of these templates are free and don't require extensive customization to the Bootstrap baseline.
						<hr>
						<ul class="list-unstyled">
							<li><a href="http://usebootstrap.com/theme/google-plus">Dashboard</a></li>
							<li><a href="http://usebootstrap.com/theme/google-plus">Darkside</a></li>
							<li><a href="http://usebootstrap.com/theme/google-plus">Greenfield</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--/row-->

		<hr>

		<div class="row">
			<div class="col-sm-4 col-xs-6">
				<div class="panel panel-default">
					<div class="panel-thumbnail">
						<img src="resources/img/bg_suburb.jpg" class="img-responsive">
					</div>
					<div class="panel-body">
						<p class="lead">Hacker News</p>
						<p>120k Followers, 900 Posts</p>
						<p>
							<img src="resources/img/photo_003.jpg" height="28px" width="28px"> <img src="resources/img/photo.jpg" height="28px" width="28px">
						</p>
					</div>
				</div>
			</div>
			<!--/col-->

			<div class="col-sm-4 col-xs-6">
				<div class="panel panel-default">
					<div class="panel-thumbnail">
						<img src="resources/img/FFF.gif" class="img-responsive">
					</div>
					<div class="panel-body">
						<p class="lead">Bootstrap Templates</p>
						<p>902 Followers, 88 Posts</p>
						<p>
							<img src="resources/img/uFp_tsTJboUY7kue5XAsGAs28.png" height="28px" width="28px"> <img src="resources/img/photo_002.jpg" height="28px" width="28px">
						</p>
					</div>
				</div>
			</div>
			<!--/col-->

			<div class="col-sm-4 col-xs-6">
				<div class="panel panel-default">
					<div class="panel-thumbnail">
						<img src="resources/img/FFF_002.gif" class="img-responsive">
					</div>
					<div class="panel-body">
						<p class="lead">Social Media</p>
						<p>19k Followers, 789 Posts</p>
						<p>
							<img src="resources/img/photo_003.jpg" height="28px" width="28px"> <img src="resources/img/photo.jpg" height="28px" width="28px">
						</p>
					</div>
				</div>
			</div>
			<!--/col-->
		</div>

		<hr>

		<div class="row">
			<div class="col-md-12">
				<h2>Playground</h2>
			</div>
			<div class="col-md-12">
				<div class="alert alert-info alert-dismissable">
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
					<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>Buttons &amp; Labels</h4>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-xs-4">
								<a class="btn btn-default center-block" href="#">Button</a>
							</div>
							<div class="col-xs-4">
								<a class="btn btn-primary center-block" href="#">Primary</a>
							</div>
							<div class="col-xs-4">
								<a class="btn btn-danger center-block" href="#">Danger</a>
							</div>
						</div>
						<br>
						<div class="row">
							<div class="col-xs-4">
								<a class="btn btn-warning center-block" href="#">Warning</a>
							</div>
							<div class="col-xs-4">
								<a class="btn btn-info center-block" href="#">Info</a>
							</div>
							<div class="col-xs-4">
								<a class="btn btn-success center-block" href="#">Success</a>
							</div>
						</div>
						<hr>
						<div class="btn-group btn-group-sm">
							<button class="btn btn-default">1</button>
							<button class="btn btn-default">2</button>
							<button class="btn btn-default">3</button>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-4">
								<span class="label label-default">Label</span> <span class="label label-success">Success</span>

							</div>
							<div class="col-md-4">
								<span class="label label-warning">Warning</span> <span class="label label-info">Info</span>
							</div>
							<div class="col-md-4">
								<span class="label label-danger">Danger</span> <span class="label label-primary">Primary</span>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>Progress Bars</h4>
					</div>
					<div class="panel-body">

						<div class="progress">
							<div class="progress-bar progress-bar-info" style="width: 20%"></div>
						</div>
						<div class="progress">
							<div class="progress-bar progress-bar-success" style="width: 40%"></div>
						</div>
						<div class="progress">
							<div class="progress-bar progress-bar-warning" style="width: 80%"></div>
						</div>
						<div class="progress">
							<div class="progress-bar progress-bar-danger" style="width: 50%"></div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<a href="#" class="pull-right">View all</a>
						<h4>Tabs</h4>
					</div>
					<div class="panel-body">

						<ul class="nav nav-tabs">
							<li class="active"><a href="#A" data-toggle="tab">Section 1</a></li>
							<li><a href="#B" data-toggle="tab">Section 2</a></li>
							<li><a href="#C" data-toggle="tab">Section 3</a></li>
						</ul>
						<div class="tabbable">
							<div class="tab-content">
								<div class="tab-pane active" id="A">
									<div class="well well-sm">I'm in Section A.</div>
								</div>
								<div class="tab-pane" id="B">
									<div class="well well-sm">Howdy, I'm in Section B.</div>
								</div>
								<div class="tab-pane" id="C">
									<div class="well well-sm">I've decided that I like wells.</div>
								</div>
							</div>
						</div>
						<!-- /tabbable -->

						<div class="col-sm-12 text-center">
							<ul class="pagination center-block" style="display: inline-block;">
								<li><a href="#"></a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#"></a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>
			<!--playground-->

			<br>

			<div class="clearfix"></div>

			<hr>
			<div class="col-md-12 text-center">
				<p>
					<a href="http://usebootstrap.com/theme/google-plus" target="_ext">Download Google Plus Style Template</a><br> <a href="http://usebootstrap.com/theme/google-plus" target="_ext">More Bootstrap Templates by @Bootply</a>
				</p>
			</div>
			<hr>

		</div>
	</div>
	<!--/main-->



	<!--login modal-->
	<div style="display: none;" id="loginModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h2 class="text-center">
						<img src="resources/img/photo_002.png" class="img-circle"><br>Login
					</h2>
				</div>
				<div class="modal-body">
					<form class="form col-md-12 center-block">
						<div class="form-group">
							<input class="form-control input-lg" placeholder="Email" type="text">
						</div>
						<div class="form-group">
							<input class="form-control input-lg" placeholder="Password" type="password">
						</div>
						<div class="form-group">
							<button class="btn btn-primary btn-lg btn-block">Sign In</button>
							<span class="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<div class="col-md-12">
						<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!--about modal-->
	<div style="display: none;" id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h2 class="text-center">About</h2>
				</div>
				<div class="modal-body">
					<div class="col-md-12 text-center">
						<a href="http://usebootstrap.com/theme/google-plus">This Bootstrap Template</a><br>was made with <i class="glyphicon glyphicon-heart"></i> by <a href="http://usebootstrap.com/theme/google-plus">Bootply</a> <br> <br> <a
							href="https://github.com/iatek/bootstrap-google-plus">GitHub Fork</a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn" data-dismiss="modal" aria-hidden="true">OK</button>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
	<script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min.js"></script>
	<script src="resources/js/lib/wow.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {

			$('#btnToggle').click(function() {
				if ($(this).hasClass('on')) {
					$('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
					$(this).removeClass('on');
				} else {
					$('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
					$(this).addClass('on');
				}
			});
		});
	</script>

	<!-- JavaScript jQuery code from Bootply.com editor  -->
	<script type='text/javascript'>
		$(document).ready(function() {
			new WOW().init();
		});
	</script>
</body>
</html>