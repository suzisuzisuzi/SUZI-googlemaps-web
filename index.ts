/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

async function initMap(): Promise<void> {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 5,
        center: { lat: 19, lng: 73 },
        mapTypeId: "satellite",
    });

    let points = await getPoints();

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: points,
        map: map,
        radius: 50,
        opacity: 0.8,
    });

    // document
    //     .getElementById("change-gradient")!
    //     .addEventListener("click", changeGradient);
}

// function changeGradient(): void {
//     const gradient = [
//         "rgba(0, 255, 255, 0)",
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 191, 255, 1)",
//         "rgba(0, 127, 255, 1)",
//         "rgba(0, 63, 255, 1)",
//         "rgba(0, 0, 255, 1)",
//         "rgba(0, 0, 223, 1)",
//         "rgba(0, 0, 191, 1)",
//         "rgba(0, 0, 159, 1)",
//         "rgba(0, 0, 127, 1)",
//         "rgba(63, 0, 91, 1)",
//         "rgba(127, 0, 63, 1)",
//         "rgba(191, 0, 31, 1)",
//         "rgba(255, 0, 0, 1)",
//     ];

//     heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
// }

async function getPoints() {
    let url = "https://suzi-backend.onrender.com/gheatmap/test";
    let response = await fetch(url);
    let data = await response.json();
    let locations = data.map((location: { latitude: number | google.maps.LatLng | google.maps.LatLngLiteral; longitude: number | boolean | null | undefined; }) => {
        return new google.maps.LatLng(location.latitude, location.longitude);
    });
    return locations;
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
export { };
