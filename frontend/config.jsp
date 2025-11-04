<%@ page import="java.util.*" %>
<%
String apiBase = System.getenv("API_BASE_URL");
if(apiBase==null) apiBase="http://localhost:5000/api";
%>
<script>
const API_BASE_URL = "<%=apiBase%>";
</script>
