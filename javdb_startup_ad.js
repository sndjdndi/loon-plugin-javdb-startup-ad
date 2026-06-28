let body = $response.body || "";

try {
    let obj = JSON.parse(body);

  if (obj && obj.data && obj.data.splash_ad) {
        obj.data.splash_ad.enabled = false;
        obj.data.splash_ad.overtime = 0;
        obj.data.splash_ad.ad = null;
  }

  $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({});
}
