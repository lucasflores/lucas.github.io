---
title:  "Hacky Hackin Again: Pennapps XV"
date: "2017-01-24"
tags: ["progressive web app", "react", "redux", "node"]
image: './images/cryptoino/thumb2.png'
---

![poop](./images/cryptoino/donuts.jpg "poop")

Our team wanted to incorporate machine learning and neural networks into our project for our own education. We identified a need for lightweight symmetric key exchange in the upcoming Internet of Things (IoT). Embedded devices in household or everyday items do not have much processing power or memory; nevertheless, there is a great need to secure these devices from attackers. State-of-the-art exchange schemes such as Diffie-Hellman asymmetric exchange are arithmetically expensive, a fact that prohibits their implementation on constrained-memory systems that sometimes use integer widths as small as 8 bits. This observation led us to the idea of Tree Parity Machine symmetric key exchange, an idea pioneered by physicists in the early 2000's ([paper here](https://arxiv.org/abs/cond-mat/0208453)), and we tested their feasibility on an Arduino system.



<div class="page-image">
  <img src="/images/cryptoino/Tree_Parity_Machine.jpg" class="page-feature-image" alt="Hacky Hackin Again: Pennapps XV" itemprop="image">
  <div class="image-credit">Image source: <a href="https://" itemprop="citation">source</a></div><!-- /.image-credit -->
</div><!-- /.page-image -->
  <figcaption class=""><i>Our entire hack on this lil breadboard</i></figcaption>

# What It Does

Using two Arduinos, we attempt to have them exchange secret keys using tree parity machine feed-forward neural networks. By having pre agreed upon identical neural net topologies, with randomized weights installed on each Arduino, the Arduinos train each others weights depending on whether their outputs match. After a short training period the weights become identical in each device and are used as the agreed upon key. We benchmarked our system by using a state-of-the-art Diffie-Hellman elliptic curve symmetric key exchange implementation, optimized for the Arduino microcontroller. This is applicable in the emerging area of light weight cryptography (in particular, symmetric key exchange) which is necessary for secure communication between small devices that exist in the IoT.

# How We Built It

Hardware: Two Arduino MKR1000's were attached to your standard bread board

Software: We began with a high-level Python implementation of a tree parity machine simulator. This formed the basis of a C (and eventually Arduino-compatible) implementation of a two-party tree parity machine key exchanger. The Diffie-Hellman elliptic curve key exchanger was implemented and heavily optimized as an open-source project at ArduinoLibs.

<div class="page-image">
  <img src="/images/cryptoino/NeuralNetVis.gif" class="image-right" width="60%" alt="Hacky Hackin Again: Pennapps XV" itemprop="image">
  <figcaption class="image-right" ><i>Teammates with expressions of great confidence</i></figcaption>
</div><!-- /.page-image -->


# Challenges We Ran Into

Translating python code into c code, and then into ARM compilable code proved to be challenging. The theory behind both neural networks and cryptography is complicated, and we needed to understand several relatively recent scientific papers before even beginning to write any code.

<div class="page-image">
  <img src="/images/cryptoino/device.jpg" class="image-right" width="50%"  alt="Hacky Hackin Again: Pennapps XV" itemprop="image">
  <figcaption class="image-right" ><i>Teammates with expressions of great confidence</i></figcaption>
</div><!-- /.page-image -->

# Accomplishments We are Proud of

We went way out of our comfort zone in working with embedded systems, neural networks, cryptography, serial communication, and then combining all of these things. We learned a lot and are happy we were able to work through the challenges.
