<footer class="bg-muted/30 border-t">
    <div class="container py-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <!-- Brand -->
            <div class="space-y-4">
                <div class="flex items-center gap-2">
                    <div
                        class="bg-primary/10 relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg"
                    >
                        <img src="nuqayah.png" alt="Logo" class="h-6 w-6" />
                    </div>
                    <span
                        class="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
                        >SvelteUI</span
                    >
                </div>
                <p class="text-muted-foreground max-w-xs text-sm">
                    Building beautiful, accessible, and performant web applications with Svelte 5
                    and Tailwind CSS 4.
                </p>
                <div class="flex items-center gap-4">
                    <a
                        href="https://github.com/nuqayah"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <GithubIcon class="h-5 w-5" />
                    </a>
                    <a
                        href="https://x.com/nuqayah"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <TwitterIcon class="h-5 w-5" />
                    </a>
                    <a
                        href="https://nuqayah.com"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <img src="nuqayah.png" alt="Nuqayah" class="h-5 w-5" />
                    </a>
                </div>
            </div>

            <!-- Links -->
            <div>
                <h3 class="mb-4 font-medium">Product</h3>
                <ul class="space-y-2">
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Features</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Pricing</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Documentation</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Changelog</a
                        >
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="mb-4 font-medium">Company</h3>
                <ul class="space-y-2">
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >About</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Blog</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Careers</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="mb-4 font-medium">Legal</h3>
                <ul class="space-y-2">
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Privacy</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Terms</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Cookie Policy</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground transition-colors"
                            >Licenses</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-muted mt-12 border-t pt-8">
            <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
                <span class="text-muted-foreground text-sm"
                    >© 2025 Nuqayah. All rights reserved.</span
                >
                <div class="flex items-center gap-4">
                    <Button variant="ghost" size="sm" class="h-8 px-3">Privacy</Button>
                    <Button variant="ghost" size="sm" class="h-8 px-3">Terms</Button>
                    <Button variant="ghost" size="sm" class="h-8 px-3">Contact</Button>
                </div>
            </div>
        </div>
    </div>
</footer>

<script lang="ts">
import {GithubIcon, TwitterIcon} from 'lucide-svelte'

import {Button} from '$lib/components/ui/button/index.js'
</script>
