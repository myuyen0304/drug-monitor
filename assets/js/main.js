let url = location.host; //so it works locally and online

$("table").rtResponsiveTables(); //for the responsive tables plugin

$("#add_drug").submit(function (event) {
  //on a submit event on the element with id add_drug
  alert($("#name").val() + " sent successfully!"); //alert this in the browser
});

$("#update_drug").submit(function (event) {
  // on clicking submit
  event.preventDefault(); //prevent default submit behaviour

  //var unindexed_array = $("#update_drug");
  var unindexed_array = $(this).serializeArray(); //grab data from form
  var data = {};

  $.map(unindexed_array, function (n, i) {
    //assign keys and values from form data
    data[n["name"]] = n["value"];
  });

  var request = {
    //use a put API request to use data from above to replace what's on database
    url: `http://${url}/api/drugs/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request)
    .done(function (response) {
      alert(data.name + " Updated Successfully!");
      window.location.href = "/manage";
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Có lỗi xảy ra: " + errorThrown);
      window.location.href = "/error";
    });
});

if (window.location.pathname == "/manage") {
  //since items are listed on manage
  $ondelete = $("table tbody td a.delete"); //select the anchor with class delete
  $ondelete.click(function () {
    //add click event listener
    let id = $(this).attr("data-id"); // pick the value from the data-id

    let request = {
      //save API request in variable
      url: `http://${url}/api/drugs/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this drug?")) {
      // bring out confirm box
      $.ajax(request).done(function (response) {
        // if confirmed, send API request
        alert("Drug deleted Successfully!"); //show an alert that it's done
        location.reload(); //reload the page
      });
    }
  });
}

if (window.location.pathname == "/purchase") {
  // Function to update purchase calculations
  function updatePurchaseCalculations(days) {
    $("table tbody tr").each(function () {
      const $row = $(this);
      const perDay = parseInt($row.data("per-day"));
      const card = parseInt($row.data("card"));
      const pack = parseInt($row.data("pack"));
      const originalDosage = $row.data("dosage");

      if (perDay && card && pack && originalDosage) {
        const totalPills = days * perDay;
        const cardsToBuy = Math.ceil(totalPills / card);
        const packsToBuy = Math.ceil(totalPills / pack);

        // Update cards to buy (keeping the "per pack" text)
        const cardsPerPack = pack / card;
        const perPackText = cardsPerPack < 2 ? " card" : " cards";
        $row.find(".cards-to-buy .cards-count").text(cardsToBuy);

        // Update packs to buy
        $row.find(".packs-to-buy").text(packsToBuy);

        // Calculate and update dosage for the specified days
        const dosageForDays = calculateDosageForDays(originalDosage, days);
        $row.find(".dosage-display").text(dosageForDays);
      }
    });
  }

  // Function to calculate dosage for specified number of days
  function calculateDosageForDays(originalDosage, days) {
    // Parse the original dosage format: XX-morning,XX-afternoon,XX-night
    const dosageParts = originalDosage.split(",");

    if (dosageParts.length !== 3) {
      return originalDosage; // Return original if format is incorrect
    }

    let morningTotal = 0;
    let afternoonTotal = 0;
    let nightTotal = 0;

    // Extract numbers from each part
    dosageParts.forEach((part) => {
      const trimmedPart = part.trim();
      if (trimmedPart.includes("morning")) {
        const match = trimmedPart.match(/(\d+)-morning/);
        if (match) morningTotal = parseInt(match[1]) * days;
      } else if (trimmedPart.includes("afternoon")) {
        const match = trimmedPart.match(/(\d+)-afternoon/);
        if (match) afternoonTotal = parseInt(match[1]) * days;
      } else if (trimmedPart.includes("night")) {
        const match = trimmedPart.match(/(\d+)-night/);
        if (match) nightTotal = parseInt(match[1]) * days;
      }
    });

    // Format the result
    return `${morningTotal}-morning,${afternoonTotal}-afternoon,${nightTotal}-night`;
  }

  $("#drug_days").submit(function (event) {
    event.preventDefault(); // prevent default submit behaviour

    const days = parseInt($("#days").val());

    if (days && days > 0) {
      $("#purchase_table").show();
      updatePurchaseCalculations(days);
      alert("Drugs calculated for " + days + " days!");
    } else {
      alert("Please enter a valid number of days!");
    }
  });
}
