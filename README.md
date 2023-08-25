# Microservices
A Microservices architecture refers to an application which is constructed from a 
number of independent services called Microservices.  Each microservice is a 
self-contained module that performs a discrete group of functions. 
The term micro does not mean that the modules that make up the system are necessarily small, 
just independent. In fact, they each may have a website, web service, windows service and a database. 
Communication between each of these modules is achieved via web service calls and messages on a service bus that calls to and collects the relevant data/information from each module. 
 
 Choosing which architecture is right for your project is a very complex task. Complexity, flexibility, size, time frames, diversity of the team, cost-effectiveness and specific conditions of the project are just some of the factors that need to be considered when deciding which software architecture is the best for your project.

### The Architectural Pattern

Microservices architecture is a distributed system of single self-contained units and an approach to application development in which a large application is built as a suite of modular services. Each module supports a specific business goal and uses a simple, well-defined interface to communicate with other sets of services.

By splitting your app into small units every part of it is independently deployable and scalable, can be written by different teams and in different programming languages and can be tested individually.

The micro-service  applications is capable of running in their own memory space, data federation and scale independently from each other across potentially many separate machines. 

When you choose to build your application as a set of microservices, you need to decide how your application’s clients will interact with the microservices. With a monolithic application there is just one set of (typically replicated, load‑balanced) endpoints. In a microservices architecture, however, each microservice exposes a set of what are typically fine‑grained endpoints.

Services must handle requests from the application’s clients. Furthermore, services must sometimes collaborate to handle those requests. They must use an inter-process communication protocol for translations and forwarding requests. Use asynchronous non-blocking messaging for inter-service communication. Services communicating by exchanging messages over messaging channels. Examples of asynchronous messaging technologies are Apache Kafka (Event Driven) and RabbitMQ (Messaging). Communication can also be established using REST.



### Benefits and Motivation

- Loose coupling since it decouples clients from services
- Small individual components
- Easy to maintain
- Offers parallel development
- Independent deployment
- Rapid iteration
- Feature additions - enrichments
- Confidence with CI/CD
- Improved availability since the message broker buffers messages until the consumer is able to process them
- Supports a variety of communication patterns including request/reply, notifications, request/async response, publish/subscribe, publish/async response etc
- Agile compliant: The modular approach of Microservices architecture works well with an agile management style 
as it supports the slicing and splitting up of smaller work increments and tasks which goes hand-in-hand 
with projects using an agile methodology.
- Reduced system downtime: Microservices provide the flexibility to change parts of the solution 
without affecting the solution as a whole which is key in providing a reliable solution without
 downtime for end users.

## Bottlenecks with Monolith
- Tight Coupling
- Slow Release Cycles
- Manual Releases
- No Continuous Deployment
- Not Scalable
- Lack of Log Management and Monitoring.

## Related resources
- https://github.com/kukuu/integration/blob/main/monitoring-alerting.md
- https://github.com/kukuu/integration/tree/main
