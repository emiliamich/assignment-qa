US02 View the list of pets
- And 100 pets are loaded
- Then the list of pets displayed in a table like component
- And the page is loaded in less than 2 seconds

For this scenario I choose to use a node package named browser-perf which measure browser rendering performance metrics.
For installing and running the package please follow below steps:

1. type into the command line: npm install -g browser-perf
2. make sure that assingnment-qa is up and running
3. run command: browser-perf http://host_name:$PORT

After the test has finished a table should be rendered on the current cmd window. 

The resulting test I have run for 100 records in the pet store are as follow:
Browser: chrome
┌───────────────────────────────────┬────────────────────┬──────────┬───────────────┐
│                           Metrics │              Value │ Unit     │        Source │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                      appcacheTime │              2.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                  domainLookupTime │              0.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                      redirectTime │              0.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                 droppedFrameCount │                  2 │ count    │ RafRendering… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                          loadTime │            410.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                   unloadEventTime │              0.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                numAnimationFrames │                492 │ count    │ RafRendering… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│             numFramesSentToScreen │                492 │ count    │ RafRendering… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                       connectTime │              1.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                      domReadyTime │             24.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                   initDomTreeTime │            298.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                     loadEventTime │              2.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                        readyStart │            228.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                       requestTime │              9.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                        Javascript │              0.000 │ ms       │ TimelineMetr… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                            Styles │              0.000 │ ms       │ TimelineMetr… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                        firstPaint │            446.000 │ ms       │ NetworkTimin… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                 meanFrameTime_raf │             16.695 │ ms       │ RafRendering… │
├───────────────────────────────────┼────────────────────┼──────────┼───────────────┤
│                  framesPerSec_raf │             59.897 │ fps      │ RafRendering… │
└───────────────────────────────────┴────────────────────┴──────────┴───────────────┘

The result has passed the acceptance criteria since the loading time is 410 milliseconds which is less than 2 seconds.