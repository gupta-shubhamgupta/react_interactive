import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(){

    const cart = (
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      );

    return (
        <section id="core-concepts">
                  <h2>Core Concepts</h2>
                  {cart}
                  {/* <ul>
                    <CoreConcept
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}
                    />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} />
                  </ul> */}
                </section>
    )
}