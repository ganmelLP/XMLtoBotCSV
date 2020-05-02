const express = require('express')
var convert = require('xml-js');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


var xml =
`<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="ganmellp.github.io" modified="2020-05-01T11:25:54.822Z" agent="5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36" etag="jJxRe-31Vx2ntxbm5PGL" version="13.0.2" type="device" pages="2">
  <diagram id="C5RBs43oDa-KdzZeNtuy" name="Page-1">
    <mxGraphModel dx="1298" dy="834" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-1" parent="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="nHnwIamAFQeN45wCfcTc-21" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="nHnwIamAFQeN45wCfcTc-19" target="nHnwIamAFQeN45wCfcTc-20">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-25" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="nHnwIamAFQeN45wCfcTc-19" target="nHnwIamAFQeN45wCfcTc-24">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-27" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="nHnwIamAFQeN45wCfcTc-19" target="nHnwIamAFQeN45wCfcTc-26">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-19" value="How can i help you today?" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="40" y="420" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-34" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="nHnwIamAFQeN45wCfcTc-26" target="nHnwIamAFQeN45wCfcTc-32">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-26" value="option3" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="310" y="540" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-31" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.75;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="nHnwIamAFQeN45wCfcTc-26" target="nHnwIamAFQeN45wCfcTc-30">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="430" y="680" as="sourcePoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-30" value="suboption2" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="500" y="660" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-24" value="option2" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="180" y="540" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-20" value="option1" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="40" y="540" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="nHnwIamAFQeN45wCfcTc-32" value="suboption1" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="320" y="630" width="80" height="80" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
  <diagram id="L1FCodzThZ_6bdDTATvP" name="Page-2">
    <mxGraphModel dx="1298" dy="834" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="8DRNXFKIi1S-SXiLvA1N-0" />
        <mxCell id="8DRNXFKIi1S-SXiLvA1N-1" parent="8DRNXFKIi1S-SXiLvA1N-0" />
        <mxCell id="obo9WSKCAoIHsdkhDslr-0" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="8DRNXFKIi1S-SXiLvA1N-1" source="obo9WSKCAoIHsdkhDslr-2" target="obo9WSKCAoIHsdkhDslr-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="obo9WSKCAoIHsdkhDslr-1" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="8DRNXFKIi1S-SXiLvA1N-1" source="obo9WSKCAoIHsdkhDslr-2" target="obo9WSKCAoIHsdkhDslr-3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="obo9WSKCAoIHsdkhDslr-2" value="How can i help you today?" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="8DRNXFKIi1S-SXiLvA1N-1">
          <mxGeometry x="160" y="80" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="obo9WSKCAoIHsdkhDslr-3" value="Sales" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="8DRNXFKIi1S-SXiLvA1N-1">
          <mxGeometry x="90" y="220" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="obo9WSKCAoIHsdkhDslr-4" value="Support" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="8DRNXFKIi1S-SXiLvA1N-1">
          <mxGeometry x="270" y="220" width="120" height="40" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 