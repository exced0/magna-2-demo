/*Copy MeetingReportType to SummonsOrReject*/
const targetSelectBox = document.getElementById("SummonsOrReject");
const targetCurrentOption = targetSelectBox.querySelector('.select-box__current');
const targetMeetingType = document.getElementById("MeetingType");
const MeetingTypeCurrentOption = targetMeetingType.querySelector('.select-box__current');
/* END */

const selectBoxes = document.querySelectorAll('.select-box');
selectBoxes.forEach((selectBox) => {
    const currentOption = selectBox.querySelector('.select-box__current');
    const searchBox = selectBox.querySelector('.select-box__search');
    const arrowIcon = selectBox.querySelector('.select-box__arrow');
    const list = selectBox.querySelector('.select-box__list');
    const listItems = selectBox.querySelectorAll('.select-box__list-item');

    let isOpen = true;

    const openSelectBox = () => {
        list.style.display = 'block';
        searchBox.style.display = 'block';
        arrowIcon.classList.add('select-box__arrow--open');
        isOpen = true;
    };

    const closeSelectBox = () => {
        list.style.display = 'none';
        searchBox.style.display = 'none';
        arrowIcon.classList.remove('select-box__arrow--open');

        searchBox.value = ''; 

        listItems.forEach((item) => {
            item.style.display = 'block';
        })

        isOpen = false;
    };

    const toggleSelectBox = () => {
        if (!isOpen) {
        openSelectBox();
        } else {
        closeSelectBox();
        }
    };

    currentOption.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelectBox();
    });

    arrowIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelectBox();
    });

    searchBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();

        listItems.forEach((item) => {
        const text = item.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        });
    });

    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
        const value = item.getAttribute('data-value');
        const text = item.textContent;

        currentOption.textContent = text;
        currentOption.setAttribute('data-value', value);
        
        if(selectBox.id === "MeetingReportType"){
            targetCurrentOption.textContent = text;
            targetCurrentOption.setAttribute('data-value', value);
            if((value == '1') || (value == '6')){
                MeetingTypeCurrentOption.textContent = "אסיפת בעלי אג''ח";
                MeetingTypeCurrentOption.setAttribute('data-value', 12);
            } else {
                MeetingTypeCurrentOption.textContent = "---";
                MeetingTypeCurrentOption.setAttribute('data-value', -1);
            }
            
        }

        if(selectBox.id === "RejectionReason"){
            
            const ReferenceMeetingReasonTextArea = document.getElementById("ReferenceMeetingReason"); 
            
            if(value == '3'){
                ReferenceMeetingReasonTextArea.contentEditable = true;
            } else {
                ReferenceMeetingReasonTextArea.textContent = " ";
                ReferenceMeetingReasonTextArea.contentEditable = false;
            }
            
        }

        if(selectBox.id === "MeetingCompanyNameList"){
            
            const MeetingCompanyNameTextArea = document.getElementById("MeetingCompanyName");

            
            if(value == '4'){
                MeetingCompanyNameTextArea.textContent = " ";
                MeetingCompanyNameTextArea.classList.remove('disabled'); 
            } else if(value == '-1'){
                MeetingCompanyNameTextArea.textContent = " ";
                MeetingCompanyNameTextArea.classList.add('disabled');
            } else {
                MeetingCompanyNameTextArea.classList.add('disabled');
                MeetingCompanyNameTextArea.textContent = text;
            }
            
        }
        
        
        closeSelectBox();

        e.stopPropagation();
        });
    });

    document.addEventListener('click', () => {
        closeSelectBox();
    });
});

// Reference Number validation
const ReferenceNum = document.getElementById('ReferenceNum');
const ReferenceNumError = document.getElementById('ReferenceNumError');

ReferenceNum.addEventListener('input', () => {
  const inputValue = ReferenceNum.value.trim();
  const regex = /^(([1-2]\d{3})-(\d{2})-(\d{6}))?$/;

  if (inputValue && !regex.test(inputValue)) {
    ReferenceNum.classList.add('error');
    //ReferenceNumError.style.display = 'block';
    ReferenceNumError.textContent = '9999-99-999999 יש להזין מספר אסמכתא במבנה הבא, כאשר 4 הספרות הראשונות מציינות שנה';
  } else {
    ReferenceNum.classList.remove('error');
    ReferenceNumError.textContent = '';
    //ReferenceNumError.style.display = 'none';
  }
});

// SecurityNumber validation
const SecurityNumber = document.getElementById('SecurityNumber');
const SecurityNumberError = document.getElementById('SecurityNumberError');

SecurityNumber.addEventListener('input', () => {
  const inputValue = SecurityNumber.value.trim();
  const regex = /^\d{0,8}$/;

  if (inputValue && !regex.test(inputValue)) {
    SecurityNumber.classList.add('error');
    SecurityNumberError.textContent = 'יש להזין ערך במבנה של עד 8 ספרות';
  } else {
    SecurityNumber.classList.remove('error');
    SecurityNumberError.textContent = '';
  }
});

// UniqueMeetingProofId validation
const UniqueMeetingProofId = document.getElementById('UniqueMeetingProofId');
const UniqueMeetingProofIdError = document.getElementById('UniqueMeetingProofIdError');

UniqueMeetingProofId.addEventListener('input', () => {
  const inputValue = UniqueMeetingProofId.value.trim();
  const regex = /^(([1-2]\d{3})-(\d{2})-(\d{6}))?$/;

  if (inputValue && !regex.test(inputValue)) {
    UniqueMeetingProofId.classList.add('error');
    UniqueMeetingProofIdError.textContent = '9999-99-999999 יש להזין מספר אסמכתא במבנה הבא, כאשר 4 הספרות הראשונות מציינות שנה';
  } else {
    UniqueMeetingProofId.classList.remove('error');
    UniqueMeetingProofIdError.textContent = '';
  }
});


function handleRadioButtonChange() {
    var meetingHeldOnRadio = document.getElementById("RB_MeetingHeldOn");
    var meetingCancelRadio = document.getElementById("RB_MeetingCancel");
    var postponedMeetingDateField = document.getElementById("QuorumPostponedMeetingDate");
    var postponedMeetingTimeField = document.getElementById("QuorumPostponedMeetingTime");
    var postponedMeetingAddressField = document.getElementById("QuorumPostponedMeetingAddress");

    if (meetingHeldOnRadio.checked) {
      postponedMeetingDateField.classList.remove("disabled");
      postponedMeetingTimeField.classList.remove("disabled");
      postponedMeetingAddressField.classList.remove("disabled");
    } else if (meetingCancelRadio.checked) {
      postponedMeetingDateField.classList.add("disabled");
      postponedMeetingTimeField.classList.add("disabled");
      postponedMeetingAddressField.classList.add("disabled");
      postponedMeetingDateField.value = '';
      postponedMeetingTimeField.value =  "--:--";
      postponedMeetingAddressField.textContent = ''
    }
  }
