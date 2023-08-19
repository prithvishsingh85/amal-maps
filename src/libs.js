export async function loadLibraries() {
  return await Promise.all([
    google.maps.importLibrary("marker"),
    google.maps.importLibrary("maps"),
  ]);
}
