{% extends "layout.swig" %}

{% block body %}
<div class="jumbotron">
	{% include "check_script.swig" %}
	{% include "check_fileapi.swig" %}
	{% include "upload_form.swig" %}
</div>
{% include "nav.swig" %}
<script src="pomf.min.js"></script>
{% endblock %}
