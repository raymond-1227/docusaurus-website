---
slug: upgrading-ssd-in-the-laptop
title: Upgrading SSD in the Laptop
authors: raymond
tags: [hardware, discovery]
---

So I got my new Acer laptop, and decided to upgrade it with a better SSD.

But there has always been one big issue, when you reinstall Windows, these drivers that originally came with the device are gone. This means you have to manually install all the necessary drivers for your hardware to function properly.

How do I solve this issue without downloading like 100 different drivers? The answer is to use the "Create Recovery Drive" tool that came with Windows. This native tool allows you to create a backup of your current system, including all the drivers, and restore it later when needed. (make sure you have the "Backup system files to the recovery drive" option checked!)

So I did the exact thing and experimented it, but I encountered a problem. When I tried to restore the recovery drive on the new SSD, it didn't work as expected.

After some troubleshooting, I realized that the newly installed SSD was not recognized by the recovery environment because it didn't have a proper Windows environment to start with.

Before you begin the SSD upgrade process, make sure you have the two USB drives ready:
- Recovery drive
- Windows installation media

So here are the steps that I discovered that will install you a fresh Windows installation with all the OEM software and drivers properly installed!

1. Install your SSD to your laptop
2. Install a copy of Windows on your new SSD with the installation media
3. Boot from the recovery drive
4. Choose Recover from a drive > Fully clean the drive > Recover
5. Wait for the magic to happen!

By following these steps, you should be able to get a fresh Windows installation on your new SSD with all the necessary drivers and OEM software installed, so you won't need to go through these OEM software and drivers one-by-one so annoyingly.

One thing I’m not entirely sure about is that I removed the OEM SSD before installing Windows and running the recovery process. So, if you didn’t wipe or remove the original SSD, I’m not certain whether that would affect the boot process.