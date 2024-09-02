/* Variation */

function proofOfConceptTest() {
  var waitForElements = setInterval(() => {
    const pageContainer = document.querySelector('#page');
    const mobilePageContainer = document.querySelector('#mobile_header');
    const activeContainer = pageContainer || mobilePageContainer;

    if (typeof (ranProofOfConceptTest) === 'undefined' && activeContainer) {
      window.ranProofOfConceptTest = true;
      clearInterval(waitForElements);

      // Scope CSS
      document.body.classList.add('ti486');

      // Add Test Functions Here
      proofOfConceptUPDATE();

      // tiProofOfConceptTracking();
    }
  }, 100);
}

function proofOfConceptUPDATE() {

	// Create the button element
	const button = document.createElement('button');
	button.setAttribute('type', 'button');
	button.classList.add('proof-of-concept__button');
	button.textContent = 'Open Cart Drawer';

	// Add an event listener for the click event
	button.addEventListener('click', () => {
			let event = new CustomEvent('TriggerVehicleSelectOpen', {
					detail: { vehicleConfiguration: null, reloadPageOnClose: true }
			});
			window.dispatchEvent(event);
	});

	// Find `.subcategory_landing`
	const subcategoryLanding = document.querySelector('.subcategory_landing');

	if (subcategoryLanding) {

			// Find `.generation_select`
			const generationSelect = subcategoryLanding.querySelector('.generation_select');

			if (generationSelect) {
				// Insert the button before `generationSelect`
				subcategoryLanding.insertBefore(button, generationSelect);
			} else {
				// Insert the button at the end of `subcategoryLanding`
				subcategoryLanding.appendChild(button);
			}
	} else {
		console.error('subCategoryLanding not found');
	}

  // Find `#mobile_header`
	const mobileHeader = document.querySelector('#mobile_header');

	if (mobileHeader) {
    // Insert the button at the end of `mobileHeader`
    mobileHeader.appendChild(button);
	} else {
		console.error('mobileHeader not found');
	}

}

function tiProofOfConceptTracking() {

  // UA for GA360 Accounts Only - Aspen Dental, Well Now Urgent Care, PCC, I See Me, and Turn 5
  var gaTracking = setInterval(() => {
    if (typeof (ga) !== 'undefined') {
      ga('create', 'UA-XXXXXXXX', { name: 'tiProofOfConceptTrack' }); // Update UA ID
      ga('tiProofOfConceptTrack.set', 'dimension#', 'VWO-XX Variation 1'); // Update VWO Number & Variation
      ga('tiProofOfConceptTrack.send', 'event', 'VWO', 'VWO XX', 'Variation 1', { nonInteraction: 1 }); // Update VWO Number & Variation
      clearInterval(gaTracking);

      // Tracking Elements
      ELEMENT.addEventListener('click', event => {
        ga('tiProofOfConceptTrack.send', 'event', '[Category]', '[Action]', '[Label]', { nonInteraction: 1 });
      });

    }
  }, 100);
  setTimeout(() => {
    clearInterval(gaTracking);
  }, 10000);

}

try {
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    proofOfConceptTest();
  } else {
    document.addEventListener('DOMContentLoaded', proofOfConceptTest);
  }
} catch (err) {
  const e = {
    dev: 'U05C4LLSK6G',
    vwotest: '486',
    vwodesc: 'T5-A-PLP-BrandUnknownFit-V1-Dec2023 - Variation',
    type: 'vwo',
    message: err.toString(),
    stack: err.stack,
    source: window.location.href
  };
  const x = new XMLHttpRequest();
  x.open('POST', 'https://us-central1-tixray.cloudfunctions.net/err', !0), x.send(JSON.stringify(e));
}
