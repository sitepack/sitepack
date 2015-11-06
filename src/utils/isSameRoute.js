export default function(toRouteState, fromRouteState) {
  return fromRouteState
    ? toRouteState.name === fromRouteState.name
    : false;
}
