<template>
    <section class="editor-page">
        <div class="container">
            <validation-errors class="validation-errors" v-if="errors" :validation-errors="errors"/>
            <form @submit.prevent="onSubmit">
                <fieldset>
                    <fieldset class="form-group">
                        <label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Article Title"
                              v-model="title"
                            >
                        </label>
                    </fieldset>
                    <fieldset class="form-group">
                        <label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Description"
                              v-model="description"
                            >
                        </label>
                    </fieldset>
                    <fieldset class="form-group">
                        <label>
                            <textarea
                              class="form-control"
                              placeholder="What is this article about?"
                              v-model="body"
                            ></textarea>
                        </label>
                    </fieldset>
                    <fieldset class="form-group">
                        <label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Tags"
                              v-model="tagList"
                            >
                        </label>
                    </fieldset>
                    <fieldset class="form-group">
                        <button class="btn" :disabled="isSubmitting">Publish Article</button>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    </section>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'

export default {
    name: 'articleForm',
    emits: ['articleSubmit'],
    components: { ValidationErrors },
    props: {
        initialValues: {
            type: Object,
            required: true
        },
        errors: {
            type: Object,
            required: false
        },
        isSubmitting: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            title: this.initialValues.title,
            description: this.initialValues.description,
            body: this.initialValues.body,
            tagList: this.initialValues.tagList.join(' ')
        }
    },
    methods: {
        onSubmit() {
            const form = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList.split(' ')
            }
            this.$emit('articleSubmit', form)
        }
    }
}
</script>
