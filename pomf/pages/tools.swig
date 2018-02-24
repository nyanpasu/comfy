{% extends "layout.swig" %}

{% block title %}Tools{% endblock %}
{% block body %}
<div class="jumbotron">
<h1>Tools</h1>
{% include "nav.swig" %}
</div>
<pre><code>
#!/bin/bash
# Usage: unf file[s]
if [ $# -lt 2 ]; then
	echo "Usage: $0 <file> [files...]
else
	for file in $@; do
		curl -F "files[]=$file" http://comfy.moe/upload.php
	done
fi
</code></pre>
{% endblock %}
