async function fetchAccordionData() {
    try {
      const response = await fetch('accordionscripts.json');
      const data = await response.json();
      generateAccordion(data);
    } catch (error) {
      console.error("Error loading accordion data:", error);
    }
  }
  
  function generateAccordion(data) {
    const container = document.getElementById('accordion-container');
    container.innerHTML = '';
  
    data.forEach((groupData, groupIndex) => {
      const groupElement = document.createElement('div');
      groupElement.className = 'accordion-group';
  
      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.innerHTML = `
        ${groupData.group}
        <i class="fas fa-chevron-down icon"></i>
      `;
      header.onclick = () => toggleAccordionContent(groupIndex);
      groupElement.appendChild(header);
  
      const content = document.createElement('div');
      content.className = 'accordion-content';
      groupData.scenarios.forEach(scenario => {
        const scenarioDiv = document.createElement('div');
        scenarioDiv.textContent = scenario.scenario;
        content.appendChild(scenarioDiv);
      });
  
      groupElement.appendChild(content);
      container.appendChild(groupElement);
    });
  }
  
  function toggleAccordionContent(index) {
    console.log(`Toggled accordion content at index ${index}`);
  }
  
  fetchAccordionData();
  