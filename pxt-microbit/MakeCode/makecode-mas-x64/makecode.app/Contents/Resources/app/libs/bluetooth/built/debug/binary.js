'use strict';
pxsim.noRefCounting();
pxsim.setTitle("bluetooth");
pxsim.setConfigData({}, {});


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals.listeners___201;
    r0 = undefined;
    globals.listeners___201 = (r0);
    s.tmp_0 = { fn: addListener__P204, parent: s };
    r0 = inline__P345;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"bluetooth.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P345  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: __log__P344, parent: s };
    r0 = s.arg0;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P345.info = {"start":310,"length":29,"line":13,"column":24,"endLine":13,"endColumn":53,"fileName":"bluetooth.ts","functionName":"inline"}



var __log__P344  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    return leave(s, r0)
  default: oops()
} } }
__log__P344.info = {"start":227,"length":58,"line":10,"column":4,"endLine":12,"endColumn":5,"fileName":"bluetooth.ts","functionName":"__log"}



var addListener__P204  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    s.tmp_1 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_1);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
    { step = 2; continue; }
  case 1:
  case 2:
    r0 = globals.listeners___201;
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    s.tmp_4 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_4);
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 3; continue; }
    r0 = pxsim.Array_.mk();
    s.tmp_6 = r0;
    r0 = globals.listeners___201;
    r0 = s.tmp_6;
    globals.listeners___201 = (r0);
    { step = 4; continue; }
  case 3:
  case 4:
    r0 = globals.listeners___201;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.Array_.push(s.tmp_0, s.tmp_1);
  case 5:
    return leave(s, r0)
  default: oops()
} } }
addListener__P204.info = {"start":1217,"length":186,"line":46,"column":4,"endLine":51,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"addListener"}


setupDebugger(1)
