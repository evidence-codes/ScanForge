# ScanForge Software Design Document (SDD)

Written by: Evidence Adejuwon

## Introduction

### The Purpose

This software design document describes the structure of the software and how it will be built and executed. The file provides technical details and a description of all methods and technologies.

### The Scope

The SDD aims to provide a comprehensive technical blueprint detailing the design, architecture, and implementation strategies for the ScanForge application. It serves as a guide for developers, outlining the system's structure and functionality.

### Audience

This document will be created and used by the development team. The process of making changes to the software design document should be discussed with all participants. All stakeholders are free to refer to SDD at any stage of the project.

### Definitions, Acronyms and Abbreviations

### Reference

## Overview

ScanForge empowers you to create unlimited, long-lasting QR codes—no strings attached. Effortlessly generate, download, and share QR codes directly from your devices, without expiration dates or hidden fees.

Key Features:

- **Instant QR Code Generation:** Transform text or links into QR codes with a single click.
- **Versatile Content Support:** Accommodate both plain text and website links for flexible QR code creation.
- **Seamless Download and Sharing:** Easily download generated QR codes as image files for effortless sharing across platforms.
- **Mobile-Optimized Design:** Enjoy a seamless experience on any device, from smartphones to tablets to desktops.

## Executive Summary

**ScanForge** redefines QR code creation by offering a **free, intuitive platform** that empowers users of all levels to generate **instant, permanent codes** and share them seamlessly across any device. We aim to become the **leading force in QR code technology**, transforming how individuals and businesses leverage its limitless potential. ScanForge 

### Goals

To democratize QR code creation by eliminating restrictions and providing a user-friendly experience that fosters widespread adoption and application.

### Objectives

- **Effortless Generation:** Allow users to instantly generate QR codes from text or links with a single click.
- **Unwavering Accessibility:** Offer unlimited, permanent codes free from expiration limitations.
- **Seamless Sharing:** Facilitate easy download and sharing of generated QR codes across platforms.
- **Mobile-First Design:** Ensure a flawless experience on any device, from smartphones to desktops.
- **Limitless Potential:** Empower individuals and businesses to **leverage QR codes for marketing, information sharing, personal tasks, and beyond.**

### Strategy

- **Intuitive Interface:** Focus on user-friendliness and design an interface that is clear, simple, and enjoyable to navigate.
- **Strategic Partnerships:** Collaborate with complementary businesses and platforms to integrate QR code functionalities and expand reach.
- **Continuous Innovation:** Actively develop new features and functionalities based on user feedback and market trends.

## System Overview

ScanForge is a versatile QR code generation platform designed for effortless creation and customization of QR codes. It simplifies the process of generating QR codes for various purposes, catering to the needs of businesses, educators, marketers, and individuals. It offers the following key features:

- **Intuitive Interface:** User-friendly design facilitating easy QR code creation.
- **Customization Options:** Flexibility to personalize QR codes with colors, logos, and design elements.
- **Versatility:** Supports a wide range of QR code types for diverse applications.
- **Security Measures:** Ensures data protection and secure QR code generation.

### Main User Activities

- **QR Code Generation:** Users can swiftly create customized QR codes for URLs, text, contact information, and more.
- **Data Embedding:** Adding various data types such as URLs, text, or contact details into QR codes.
- **Sharing and Downloading:** Facilitating easy sharing and downloading of generated QR codes.

### Subsystem Description

- **Administration Subsystem:** Manages user accounts, settings, and access control.

## Future Contingencies

**Technological Advancements:** Stay updated with emerging technologies in QR code standards, security protocols, and customization options.

**Increased Security Threats:** Enhance security measures, update encryption protocols, and implement additional security layers to safeguard user data and QR code integrity.

**User Base Expansion:** Scale infrastructure and resources to accommodate increased user traffic and demand, ensuring seamless performance and reliability.

**User Feedback and Iterations:** Continuously gather user feedback to identify areas for improvement and iterate on ScanForge's functionalities based on user needs and preferences.

**Expansion Plans (New Features or Versions):** Plan for the development and rollout of new versions or features (e.g., Pro, Premium) in response to user demands, ensuring seamless integration and customer satisfaction.

<!-- ## Document Organization

### Documentation Storage and Access

- **Requirements Documentation:** Stored in a dedicated folder/repository using version control (e.g., Git), accessible to all team members.
- **Wiki Storage:** Utilize a collaborative platform (e.g., Confluence, GitHub Wiki) for comprehensive project documentation, accessible and editable by authorized stakeholders.
- **Libraries:** Store relevant references, frameworks, and third-party resources in a centralized location accessible to developers.
- **Official Product Docs:** Maintain official product documentation on a platform accessible to end-users (e.g., website, knowledge base).

### Document Structure and Security Practices

- **Requirements Documentation:** Structured with clear sections (functional, non-functional, user stories) and versioned securely using Git, ensuring controlled access and change tracking.
- **Wiki Storage:** Organized hierarchically with sections for SRS, SDD, user guides, FAQs, and security protocols. Access rights managed based on roles.
- **Libraries:** Categorized libraries with clear labeling, versioning, and access permissions to ensure secure yet accessible resource utilization.
- **Official Product Docs:** Presented in an easily navigable format for end-users, regularly updated, and maintained securely to prevent unauthorized alterations.

### Responsibilities for Documentation

- **Requirements:** Product Managers and Business Analysts responsible for gathering and detailing requirements. Developers review and validate for technical feasibility.
- **Wiki Storages:** Team members across disciplines contribute to maintaining and updating project documentation. A designated Documentation Manager oversees content accuracy and coherence.
- **Libraries:** Developers and relevant stakeholders responsible for maintaining libraries, updating dependencies, and ensuring resources' relevancy.
- **Official Product Docs:** Technical writers, in collaboration with development teams, responsible for creating and updating user-facing documentation. -->

## Design Guidelines

### Roles

#### 1. Development Team

- Developers, Engineers, Designers: Responsible for technical implementation, system architecture, and design elements.   

#### 2. Product Managers

- Oversee product vision, requirements gathering, and alignment of technical solutions with business objectives.

#### 3. Quality Assurance (QA) Team

- Ensures software quality, performs testing, and validates system functionalities.

### Responsibilities

#### Development Team:

- Designs system architecture, modules, and implements technical solutions aligned with project requirements.

#### Product Managers:

- Gather and prioritize requirements, define user stories, and ensure the SDD reflects the intended product functionality.

#### QA Team:

- Conducts testing, validates system functionalities, and ensures adherence to specified requirements.

### System Assumptions

- **Stable Internet Connectivity:** Assumes users have stable internet access for using ScanForge across web, mobile, and desktop platforms.   
- **Platform Compatibility:** Assumes compatibility with modern browsers and operating systems for optimal user experience.

### Constraints

- **Resource Limitations:** Constraints on server resources or storage may impact scalability and data handling capabilities.
- **Third-Party Integration:** Dependency on third-party APIs or services for specific functionalities may impose limitations.

### System Dependencies

- **Data Storage Services:** Relies on robust data storage services for securely managing user data and QR code information.
- **External APIs:** Dependencies on external APIs for certain functionalities, such as QR code generation.

### Project Risks

- **Security Vulnerabilities:** Risk of security breaches due to data handling, storage, or transmission vulnerabilities.
- **Scope Creep:** Risk of project scope expanding beyond initial requirements, impacting timelines and resource allocation.

## Design Considerations

### Operating Environments

ScanForge operates across multiple platforms to ensure a broad user reach and convenience.

- **Web:** Primarily designed for modern web browsers (Chrome, Firefox, Safari), using React JS.
- **Mobile:** Native mobile apps developed for Android (using React Native), ensuring optimal performance and user experience on android platforms.
- **Desktop:** Utilizes Electron framework to create desktop applications compatible with major operating systems (Windows, macOS, Linux).

### Development Methods

ScanForge adopts an Agile development methodology to ensure iterative development, flexibility, and responsiveness to evolving user needs.

- **Agile Approach:** Facilitates continuous improvement, frequent updates, and regular user feedback integration into the development process.

### Monolithic Architecture for ScanForge

#### Single Codebase

- **Unified Application:** All functionalities, including QR code generation, customization, user management, and data handling, reside within a single codebase.

#### Components and Modules

- **Tightly Integrated:** Different functionalities are tightly coupled within the application, sharing code and resources directly.

#### Advantages

- **Simplicity:** Easier development, deployment, and testing due to the centralized nature of the application.
- **Synchronous Processing:** Simplifies communication between different components within the application.

#### Technology Stack

- **Backend:** Node.js for server-side runtime, Express.js for handling HTTP requests and routing, and MongoDB for data storage.

#### Development and Testing

- **Incremental Development:** Develop and test individual functionalities incrementally within the monolithic architecture.

## System Architecture and Architecture Design

### System Architecture Design

The architecture revolves around three key elements: the Backend Services responsible for data processing, Frontend Interfaces for user interaction, and Database Management for secure data storage.

![ScanForge design 1](https://hackmd.io/_uploads/HygExV-_6.jpg)


### Software Architecture Description

- **Backend Services:**

   - Node.js and Express.js power the backend, handling QR code generation, user authentication, and database interactions.
   - Utilizing a monolithic architecture to consolidate all components into a single codebase for streamlined development and deployment.

- **Frontend Interfaces:**

   - Developed using React and React Native for web and mobile interfaces respectively.
   - Offers a uniform and intuitive user experience across platforms.

- **Database Management:**

   - MongoDB utilized as the primary database for efficient data storage and retrieval.
   - Implements Mongoose ODM for simplified database interactions.

### MVC(Models, Views and Controllers) Architectural Pattern
![ScanForge MVC design](https://hackmd.io/_uploads/HkP8lVZ_T.jpg)


### ScanForge Data Flow Diagram
![ScanForge DFD.drawio](https://hackmd.io/_uploads/ryWueN-ua.png)

### ScanForge Class Diagram
![ScanForge CD.drawio](https://hackmd.io/_uploads/rJVsx4bOp.png)


## Design Specifications

### **Database:** MongoDB

### **Collections**
1. **users**
   - Attributes: 
     - \_id (Primary Key)
     - fullName (String)
     - mobile (String)
     - email (String)
     - dateOfBirth (Date)
     - dp (String - URL to Profile Picture)
     - verifiedStatus (Boolean)
2. **qrcodes**
   - Attributes: 
     - \_id (Primary Key)
     - userID (Reference to users collection)
     - url (String - QR Code URL)
     - generatedDate (Date)

### **Relationships**
- One-to-Many relationship between users and qrcodes (One user can have multiple QR codes)

### **Design Process**
1. **Define Collections:** Identify collections for users and qrcodes based on the application's data requirements.
2. **Attributes Definition:** Specify attributes for each collection keeping in mind the data structure needed for functionalities.
3. **Indexes:** Define indexes on fields like userID or email for quicker query performance.
4. **Schema Validation:** Implement schema validation to ensure data consistency and integrity.
